// import Link from "next/link";
// import Image from "next/image";
import LoginForm from "./login/login-form";
export default function Home() {
  return (
    // <div>
    //   <section className="hero min-h-screen flex flex-col bg-blue-300 items-center justify-center text-center p-8">
    //     <div className="flex justify-center mb-3 w-full max-w-5xl">
    //       <Image
    //         src="/images/Learn.jpg"
    //         alt="Hero Image"
    //         width={800}
    //         height={450}
    //         className="rounded-lg shadow-2xl"
    //       />
    //     </div>

    //     <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-animated animate-gradient-x">
    //       Welcome to Next.js Learning
    //     </h1>

    //     <p className="text-lg mb-8">
    //       Welcome to Evotech React/NextJS Master Class.
    //     </p>

    //     <div className="flex gap-4">
    //       <Link
    //         href="/login"
    //         className="rounded-full bg-slate-300 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //       >
    //         Login
    //       </Link>

    //       <Link
    //         href="/register"
    //         className="rounded-full bg-slate-300 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //       >
    //         Register
    //       </Link>

    //       <Link
    //         href="/dashboard"
    //         className="rounded-full bg-slate-300 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //       >
    //         Dashboard
    //       </Link>
    //     </div>
    //   </section>
    // </div>
    <div
      className="flex flex-col justify-center items-center min-h-screen py-2 text-black"
      style={{ backgroundColor: "#2e86c1" }}
    >
      <LoginForm title="Sign in to Izz Solutions" />
    </div>
  );
}
