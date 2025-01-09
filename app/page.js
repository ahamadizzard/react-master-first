//this is a client side rendering component

import React from "react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <title>Learning ReactMaster @ Evotech</title>

      <section className="hero min-h-screen flex flex-col bg-blue-300 items-center justify-center text-center p-8">
        <div className="flex justify-center mb-3 w-full max-w-5xl">
          <Image
            src="/images/Hero.jpg"
            alt="Hero Image"
            width={800}
            height={450}
            className="rounded-lg shadow-2xl "
          ></Image>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-animated animate-gradient-x">
          Welcome to Next.js Learning
        </h1>

        <p className="text-lg mb-8">
          Welcome to Evotech React/NextJS Mater Class.
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-full  bg-slate-300 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/login"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          {/* <Button className="w-44" type="link" href="/register">
            Register
          </Button> */}

          <a
            className="rounded-full  bg-slate-300 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/register"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
          <a
            className="rounded-full  bg-slate-300 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/dashboard"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
        </div>
      </section>
    </div>
  );
}
