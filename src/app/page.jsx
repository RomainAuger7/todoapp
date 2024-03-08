import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import { Button } from "@/components/ui/button"
import {
  handleGithubLogin,
  handleGoogleLogin,
  handleKakaoLogin,
} from "@/lib/actions"
import { auth } from "@/lib/auth"
import Image from "next/image"
import React from "react"

const TodoApp = async () => {
  const session = await auth()

  return (
    <div className="min-h-screen m-auto flex flex-col p-5 items-center justify-center font-mono gap-10">
      <h1 className="text-4xl font-bold text-primary outline outline-none bg-black rounded-xl p-5">
        WhatToDoToday?
      </h1>

      {(!session && (
        <div className="flex flex-col items-center gap-5">
          <p className="text-lg text-secondary-foreground bg-destructive-foreground outline rounded-lg p-1">
            Please log in using the following to start planning your schedule !
          </p>
          <div className="flex flex-row gap-5 mt-5">
            <form action={handleGithubLogin}>
              <Button
                className="flex flex-row gap-2 font-semibold"
                variant="secondary"
              >
                <Image
                  src={"/github-mark.png"}
                  alt="github-logo"
                  width={25}
                  height={25}
                />
                Github
              </Button>
            </form>
            <form action={handleGoogleLogin}>
              <Button
                className="flex flex-row gap-2 font-semibold"
                variant="outline"
              >
                <Image
                  src={"/gmail.png"}
                  alt="google-logo"
                  width={25}
                  height={25}
                />
                Google
              </Button>
            </form>
            <form action={handleKakaoLogin}>
              <Button className="flex flex-row gap-2 font-semibold">
                <Image
                  src={"/logo-kakaotalk-black.png"}
                  alt="kakao-logo"
                  width={25}
                  height={25}
                />
                KakaoTalk
              </Button>
            </form>
          </div>
        </div>
      )) || (
        <div className="flex flex-col gap-4 items-center">
          <TodoForm session={session} />
          <TodoList session={session} />
        </div>
      )}
    </div>
  )
}

export default TodoApp
