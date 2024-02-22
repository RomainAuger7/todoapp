import React, { useState } from "react"
import { Button } from "./ui/button"

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText("")
  }

  return (
    <div className="bg-foreground rounded-lg p-3 justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="rounded-lg p-2 mr-4 focus:outline-none"
        />
        <Button>Add</Button>
      </form>
    </div>
  )
}

export default TodoForm
