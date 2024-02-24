"use client"
import React from "react"
import { Button } from "./ui/button"

const TodoItem = ({ todo }) => {
  return (
    <div className="flex flex-row max-w-[44rem] min-w-96 justify-between gap-5 items-center p-1 rounded-lg bg-primary text-lg">
      <span>{todo.content}</span>
      <Button variant="secondary" size="sm">
        Delete
      </Button>
    </div>
  )
}

export default TodoItem
