import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export default function LoginForm(props) {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { title } = props;

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      await signIn.email({
        email, password,
      },
        {
          onSuccess: () => {
            setLoading(false);
            redirect("/dashboard");
          },
          onError: (ctx) => {
            if (ctx) {
              setError({
                error: true,
                message: ctx.error.message
              })
              setLoading(false)
            }
          }
        }
      );
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-lg px-6 py-8 sm:px-8 lg:px-10">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-blue-600 text-xl font-semibold mb-4 text-center justify-center sm:text-left">
            {props.title}
          </h3>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-blue-600 block mb-2 dark:text-blue-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 block"
              placeholder="yourname@izzsolution.com"
            />
            {emailError && (
              <div className="text-red-500 text-sm mt-2">{emailError}</div>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-blue-600 block mb-2 dark:text-blue-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 w-full p-2.5 block"
              placeholder="***********"
            />
            {passwordError && (
              <div className="text-red-500 text-sm mt-2">{passwordError}</div>
            )}
          </div>
          {/* to display the validation error message */}
          <div className="flex justify-start">
            {error?.error && (
              <span className="text-red-500 text-sm">{error.message}</span>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <input
                className="hover:cursor-pointer bg-blue-200 rounded-md border border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-2 focus:ring-2 h-4 w-4"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label
                className="pl-2 text-sm font-medium text-blue-600 dark:text-blue-300"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
                href="#"
              >
                Forgot Password
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="submit" disabled={loading}
              className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {loading && < Loader2 className="animate-spin" />}
              Sign in
            </button>
          </div>

          {/* Sign Up Message */}
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center">
              Don&apos;t have an account?{" "}
              <a className="text-blue-600 hover:underline" href="/register">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
