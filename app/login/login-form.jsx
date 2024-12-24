import React, { useState } from "react";

export default function LoginForm({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    // if(!email && !password){
    //   setEmailError("Email is required");
    //   setPasswordError("Password is required");
    //   return false;
    // }else{
    //   setEmailError("");
    //   setPasswordError("");
    //   return true;
    // }

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
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    //login logic
    const isValid = validateForm();
    if (isValid) {
      console.log("Form Data - ", { email: email, password: password });
    }
  };
  return (
    <div className="w-[380px] mx-auto rounded-lg px-6 py-8">
      <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* title */}
          <h3 className="text-blue-600 text-xl font-semibold mb-4">
            {title}
            Sign in to Izz Solutions
          </h3>
          {/* email */}
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
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:text focus:ring-blue-500 ring-1 ring-offset-2 focus:border-blue-500 w-full p-2.5 block"
              placeholder="yourname@izzsolution.com"
            />
          </div>
          {emailError && (
            <div className="text-red-500 text-sm mt-2">{emailError}</div>
          )}
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
          </div>
          {passwordError && (
            <div className="text-red-500 text-sm mt-2">{passwordError}</div>
          )}

          {/* for remember-me and forgot password */}
          <div className="flex justify-between items-center">
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
          {/* for sign in button */}
          <div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Sign in
            </button>
          </div>
          {/* for sign up message */}
          <div>
            <p className="text-sm font-medium text-grey-600 dark:text-grey-300 ">
              Don't have an account?{" "}
              <a className="text-blue-600 hover:underline" href="#">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
