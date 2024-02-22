import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="flex flex-col p-5 justify-between gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TodoList
