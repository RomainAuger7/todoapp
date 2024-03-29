"use server"
import React from "react"
import TodoItem from "./TodoItem"
import { getUser } from "@/lib/data"

const getData = async () => {
  const res = await fetch(process.env.API_URL_TODOS, {
    cache: "no-store",
    next: { tags: ["posts"] },
  })

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const TodoList = async ({ session }) => {
  const user = await getUser(session.user.email)
  const activeUserId = user[0]?._id

  const todos = await getData()
  const displayTodos = todos.filter(
    (todo) => todo.userId === activeUserId.toString()
  )

  return (
    <div className="flex flex-col p-5 justify-between gap-2.5">
      {displayTodos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
