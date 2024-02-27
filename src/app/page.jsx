import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import { Button } from "@/components/ui/button"
import {
  handleGithubLogin,
  handleGoogleLogin,
  handleKakaoLogin,
  handleLogout,
} from "@/lib/actions"
import { auth } from "@/lib/auth"
import React from "react"

const TodoApp = async () => {
  const session = await auth()

  return (
    <div className="min-h-lvh flex flex-col items-center justify-center bg-slate-600 font-mono">
      <div className="flex flex-row items-center mb-4">
        <h1 className="text-4xl font-bold text-primary rounded-xl p-5">
          WhatToDoToday?
        </h1>
        {session && (
          <form action={handleLogout}>
            <Button size="sm" variant="outline">
              Logout
            </Button>
          </form>
        )}
      </div>

      {(!session && (
        <div className="flex flex-col items-center">
          <p className="text-lg text-secondary-foreground bg-primary rounded-2xl p-1">
            Please log in to start planning your schedule !
          </p>
          <div className="flex flex-row gap-5 mt-5">
            <form action={handleGithubLogin}>
              <Button variant="secondary">Login with Github</Button>
            </form>
            <form action={handleGoogleLogin}>
              <Button variant="outline">Login with Google</Button>
            </form>
            <form action={handleKakaoLogin}>
              <Button>Login with Kakao</Button>
            </form>
          </div>
        </div>
      )) || (
        <div className="flex flex-col gap-4 items-center">
          <TodoForm />
          <TodoList session={session} />
        </div>
      )}
    </div>
  )
}

export default TodoApp
