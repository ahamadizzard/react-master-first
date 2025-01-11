// import React, { useState } from "react";
// import { loginUser } from "@/app/libs/apis/server";

// export default function LoginForm({ title }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const validateForm = () => {
//     if (!email) {
//       setEmailError("Email is required");
//       return false;
//     } else {
//       setEmailError("");
//     }
//     if (!password) {
//       setPasswordError("Password is required");
//       return false;
//     } else {
//       setPasswordError("");
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // prevent page refresh
//     const isValid = validateForm();
//     if (isValid) {
//       // console.log("Form Data - ", { email: email, password: password });
//       const login = await loginUser({ email: email, password: password }); // call login api
//       console.log("LOGIN RESPONSE", login);
//     }
//   };
//   return (
//     <div className="w-[380px] mx-auto rounded-lg px-6 py-8">
//       <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* title */}
//           <h3 className="text-blue-600 text-xl font-semibold mb-4">
//             {title}

//           </h3>
//           {/* email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="text-sm font-medium text-blue-600 block mb-2 dark:text-blue-300"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:text focus:ring-blue-500 ring-1 ring-offset-2 focus:border-blue-500 w-full p-2.5 block"
//               placeholder="yourname@izzsolution.com"
//             />
//           </div>
//           {emailError && (
//             <div className="text-red-500 text-sm mt-2">{emailError}</div>
//           )}
//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="text-sm font-medium text-blue-600 block mb-2 dark:text-blue-300"
//             >
//               Your password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 w-full p-2.5 block"
//               placeholder="***********"
//             />
//           </div>
//           {passwordError && (
//             <div className="text-red-500 text-sm mt-2">{passwordError}</div>
//           )}

//           {/* for remember-me and forgot password */}
//           <div className="flex justify-between items-center">
//             <div>
//               <input
//                 className="hover:cursor-pointer bg-blue-200 rounded-md border border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-2 focus:ring-2 h-4 w-4"
//                 type="checkbox"
//                 name="remember"
//                 id="remember"
//               />
//               <label
//                 className="pl-2 text-sm font-medium text-blue-600 dark:text-blue-300"
//                 htmlFor="remember"
//               >
//                 Remember me
//               </label>
//             </div>
//             <div>
//               <a
//                 className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
//                 href="#"
//               >
//                 Forgot Password
//               </a>
//             </div>
//           </div>
//           {/* for sign in button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
//             >
//               Sign in
//             </button>
//           </div>
//           {/* for sign up message */}
//           <div>
//             <p className="text-sm font-medium text-grey-600 dark:text-grey-300 ">
//               Don't have an account?{" "}
//               <a className="text-blue-600 hover:underline" href="#">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { loginUser } from "@/lib/apis/server";

export default function LoginForm(props) {
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
      const login = await loginUser({ email: email, password: password }); // call login api
      console.log("LOGIN RESPONSE", login);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-lg px-6 py-8 sm:px-8 lg:px-10">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
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
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
          </div>

          {/* Sign Up Message */}
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center">
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
