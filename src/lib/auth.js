import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Kakao from "next-auth/providers/kakao"
import { connecttoDb } from "./utils"
import { User } from "./models"
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        connecttoDb()
        try {
          const user = await User.findOne({
            socialsId: account.providerAccountId,
          })
          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              socialsId: account.providerAccountId,
            })

            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      } else if (account.provider === "github") {
        connecttoDb()
        try {
          const user = await User.findOne({ socialsId: profile.id })
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              socialsId: profile.id,
            })
            console.log("New user saved")
            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      } else if (account.provider === "kakao") {
        connecttoDb()
        try {
          const user = await User.findOne({ socialsId: profile.id })
          if (!user) {
            const newUser = new User({
              username: profile.properties.nickname,
              socialsId: profile.id,
            })
            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      }
      return true
    },
  },
})
