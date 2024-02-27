import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      max: 50,
    },
    socialsId: {
      type: String,
      required: true,
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
