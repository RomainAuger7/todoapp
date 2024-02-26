import React from "react"
import TodoItem from "./TodoItem"
import { getTodos, getUser } from "@/lib/data"

const TodoList = async ({ session }) => {
  const user = await getUser(session.user.email)
  const activeUserId = user[0]._id
  const todos = await getTodos(activeUserId)
  console.log(todos)

  return (
    <div className="flex flex-col p-5 justify-between gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
