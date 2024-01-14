"use client"

//Components
import Header from "./components/Layout/Header/header";
import TodoInput from "./components/Main/todoInput";
import UserTodo from "./components/Main/userTodo";

export default function Home() {
  return (
    <>
    <Header />
    <main className="px-8">
      <TodoInput />
      <UserTodo />
    </main>
    </>
  )
}
