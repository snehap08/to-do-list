import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Todo from "@/models/Todo";


export async function GET() {
  await connectDB();
  const todos = await Todo.find({});
  return NextResponse.json(todos);
}


export async function POST(req) {
  await connectDB();
  const { title } = await req.json();
  const newTodo = await Todo.create({ title });
  return NextResponse.json(newTodo);
}


export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" });
}
