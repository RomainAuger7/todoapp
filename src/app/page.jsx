import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import { deleteTodo } from "@/lib/actions"
import React from "react"

const TodoApp = () => {
  return (
    <div className="min-h-lvh flex flex-col items-center justify-center bg-slate-700   font-mono">
      <h1 className="text-4xl font-bold text-primary rounded-xl p-5">
        TodoApp✍🏻
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default TodoApp
