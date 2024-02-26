import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import { Button } from "@/components/ui/button"
import {
  handleGithubLogin,
  handleGoogleLogin,
  handleLogout,
} from "@/lib/actions"
import { auth, signIn } from "@/lib/auth"
import React from "react"

const TodoApp = async () => {
  const session = await auth()

  return (
    <div className="min-h-lvh flex flex-col items-center justify-center bg-slate-700   font-mono">
      <h1 className="text-4xl font-bold text-primary rounded-xl p-5">
        TodoApp✍🏻
      </h1>
      {(!session && (
        <div className="flex flex-col gap-5">
          <form action={handleGithubLogin}>
            <Button>Login with Github</Button>
          </form>
          <form action={handleGoogleLogin}>
            <Button>Login with Google</Button>
          </form>
        </div>
      )) || (
        <form action={handleLogout}>
          <Button>Logout</Button>
        </form>
      )}

      {session && (
        <div>
          <TodoForm />
          <TodoList session={session} />
        </div>
      )}
    </div>
  )
}

export default TodoApp
