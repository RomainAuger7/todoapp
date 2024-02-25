import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
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
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        connecttoDb()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
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
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connecttoDb()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
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
