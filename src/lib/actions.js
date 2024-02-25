"use server"
import { revalidatePath } from "next/cache"
import { Todo } from "./models"
import { connecttoDb } from "./utils"
import { signIn, signOut } from "./auth"

export const addTodo = async (formData) => {
  console.log(formData)

  const { content } = Object.fromEntries(formData)
  const userId = 1

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
    await Todo.findByIdAndDelete(id)
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

export const handleLogout = async () => {
  await signOut()
}
