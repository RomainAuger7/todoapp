"use client"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import React, { useState } from "react"

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: text }])
  }

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-lvh flex flex-col items-center justify-center bg-background font-mono">
      <h1 className="text-4xl font-bold text-primary rounded-xl p-5">
        TodoApp✍🏻
      </h1>
      <TodoForm addTodo={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  )
}

export default TodoApp
