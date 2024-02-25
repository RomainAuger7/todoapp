import React from "react"
import TodoItem from "./TodoItem"

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const TodoList = async ({}) => {
  const todos = await getData()

  return (
    <div className="flex flex-col p-5 justify-between gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
