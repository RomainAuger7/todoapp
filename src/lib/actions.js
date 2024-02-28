"use server"
import { revalidatePath, revalidateTag } from "next/cache"
import { Todo } from "./models"
import { connecttoDb } from "./utils"
import { auth, signIn, signOut } from "./auth"
import { getUser } from "./data"
import { redirect } from "next/dist/server/api-utils"

export const addTodo = async (formData) => {
  //Get user
  const session = await auth()
  const user = await getUser(session.user.email)
  const userId = user[0]._id

  const { content } = Object.fromEntries(formData)

  try {
    connecttoDb()
    const newTodo = new Todo({
      content,
      userId,
    })
    await newTodo.save()
    revalidatePath("/")
    console.log("Saved to database")
  } catch (err) {
    console.log(err)
    return { error: "Something went wrong ! " }
  }
}

export const deleteTodo = async (id) => {
  try {
    connecttoDb()
    await Todo.findOneAndDelete({ _id: id })
    revalidatePath("/")
    console.log("Deleted from database")
  } catch (err) {
    console.log(err)
    return { error: "Something went wrong ! " }
  }
}

export const handleGithubLogin = async () => {
  await signIn("github")
}

export const handleGoogleLogin = async () => {
  await signIn("google")
}

export const handleKakaoLogin = async () => {
  await signIn("kakao")
}

export const handleLogout = async () => {
  await signOut()
}
