import React from "react"
import TodoItem from "./TodoItem"
import { getTodos, getUser } from "@/lib/data"

const TodoList = async ({}) => {
  //NEED TO IMPLEMENT USERID
  const todos = await getTodos(1)

  return (
    <div className="flex flex-col p-5 justify-between gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
