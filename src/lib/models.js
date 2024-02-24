import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
)

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      min: 3,
      max: 500,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const Todo = mongoose.models?.Todo || mongoose.model("Todo", todoSchema)
