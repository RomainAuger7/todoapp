import { Todo } from "@/lib/models"
import { connecttoDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    connecttoDb()
    const todos = await Todo.find()
    return NextResponse.json(todos)
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch todos!")
  }
}

export const dynamic = "force-dynamic"
