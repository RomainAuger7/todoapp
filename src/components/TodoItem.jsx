import React from "react"
import { Button } from "./ui/button"

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex flex-row max-w-[44rem] min-w-96 justify-between gap-5 items-center p-1 rounded-lg bg-primary text-lg">
      <span>{todo.text}</span>
      <Button variant="secondary" size="sm" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </div>
  )
}

export default TodoItem
