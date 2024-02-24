import React from "react"
import { Button } from "./ui/button"
import { addTodo } from "@/lib/actions"

const TodoForm = ({}) => {
  return (
    <div className="bg-foreground rounded-lg p-3 justify-center">
      <form action={addTodo}>
        <input
          type="text"
          name="content"
          placeholder="Write your todo..."
          className="rounded-lg p-2 mr-4 focus:outline-none"
        />
        <Button>Add</Button>
      </form>
    </div>
  )
}

export default TodoForm
