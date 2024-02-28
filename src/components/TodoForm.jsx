"use client"
import React, { useState } from "react"
import { Button } from "./ui/button"
import { addTodo, handleLogout } from "@/lib/actions"

const TodoForm = ({ session }) => {
  const [value, setValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setValue("")
      setIsLoading(false)
    }, 1000)
  }
  return (
    <div className="flex flex-row items-center bg-foreground rounded-lg p-3 justify-center">
      <form onSubmit={handleSubmit} action={addTodo}>
        <input
          type="text"
          name="content"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Write your todo..."
          className="w-80 rounded-lg p-2 mr-4 focus:outline-none"
        />
        <Button disabled={isLoading}>Add</Button>
      </form>
      {session && (
        <form action={handleLogout}>
          <Button
            disabled={isLoading}
            size="sm"
            variant="outline"
            className="ml-5 font-bold"
          >
            Logout
          </Button>
        </form>
      )}
    </div>
  )
}

export default TodoForm
