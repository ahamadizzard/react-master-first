import LoginForm from "./login/login-form";
export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen py-2 text-black"
      style={{ backgroundColor: "#2e86c1" }}
    >
      <LoginForm title="Sign in to Izz Solutions" />
    </div>
  );
}
