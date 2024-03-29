import { clsx } from "clsx"
const { default: mongoose } = require("mongoose")
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const connection = {}

export const connecttoDb = async () => {
  try {
    //Check db already connected
    if (connection.isConnected) {
      console.log("Using existing connection")
      return
    }
    const db = await mongoose.connect(process.env.MONGODB_URI)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
