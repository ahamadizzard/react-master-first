"use client"; // This is a client component. It's rendered on the browser. this is specific to nextjs
import LoginForm from "./login-form";

export default function login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 text-black">
      <LoginForm />
    </div>
  );
}
