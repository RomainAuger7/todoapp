import { Todo, User } from "./models"
import { connecttoDb } from "./utils"

export const getTodos = async (id) => {
  try {
    connecttoDb()
    const todos = await Todo.find({ userId: id })
    return todos
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch Todos")
  }
}

export const getUser = async (id) => {
  try {
    connecttoDb()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch user")
  }
}
