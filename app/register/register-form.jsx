"use client";
import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { stringify } from "postcss";
import { stringifyError } from "next/dist/shared/lib/utils";
import { registerUser } from "@/lib/apis/server";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"

const DEFAULT_ERROR = {
    error: false,
    message: "",
};

// this is a client component (functional component)
export default function RegisterForm() {
    // let errorStatus = false;
    const [error, setError] = useState(DEFAULT_ERROR); // this is a state variable to store the error message
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const handleSubmitForm = async (event) => {
        event?.preventDefault();
        const formData = new FormData(event?.currentTarget);
        const name = formData.get("name").toString();
        const email = formData.get("email").toString();
        const password = formData.get("password").toString();
        const confirmPassword = formData.get("confirmPassword") ?? "";
        // const data = {
        //     name,
        //     email,
        //     password
        // };

        //Basic Validation logic
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                setError(DEFAULT_ERROR); // reset the error message
                setLoading(true);
                const registerResponse = await registerUser({ name, email, password }); // call the registerUser function from the server
                setLoading(false);
                if (registerResponse?.error) {
                    setError({ error: true, message: registerResponse.error });
                    toast({
                        variant: "destructive",
                        title: "error",
                        description: "User registered Failed " + registerResponse.error,
                        // action: <ToastAction altText="Try Again">Try again</ToastAction>,
                    });
                } else {
                    toast({
                        variant: "success",
                        title: "Success",
                        description: "User registered successfully",
                        // action: <ToastAction altText="Try Again">Try again</ToastAction>,
                    });
                    // clear the texts in the UI
                    // event?.currentTarget.reset();
                    // refresh the ui
                    window.location.reload();

                }

            } else {
                setError({
                    error: true,
                    message: "Passwords does not match",
                });
            }
        }
        // console.log("Error Data: " + stringifyError(error));
    };
    return (
        <main>
            <div className="container w-full">
                <nav className="bg-blue-300 w-full h-14 flex p-4 justify-start items-center">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-white">Mflix Dashboard</h1>
                    </div>
                    <div className="flex justify-end items-center">
                        <a
                            className="bg-blue-400 flex hover:bg-blue-500 text-white font-bold py-1 px-3 rounded"
                            href="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                            <p>&nbsp;Home</p>
                        </a>
                    </div>
                </nav>
            </div>
            <div className="flex justify-center items-center min-h-screen ">
                <Card className="w-[350px] mx-auto mt-8 bg-blue-50/90 rounded-md shadow-black shadow-md  ">
                    <CardHeader className="text-center bg-blue-500 text-white rounded-t-md rounded-b-none  shadow-black shadow-md mt-0">
                        <CardTitle>Register</CardTitle>
                        <CardDescription className="text-center bg-blue-500 text-white">
                            Please fill in the form to register
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmitForm} className="p-4">
                        <CardContent>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col   space-y-1.5 mb-2">
                                    <Label className="font-bold" htmlFor="name">Name</Label>
                                    <Input
                                        className="focus:bg-blue-100  focus:border-blue-300 "
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John doe"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 mb-2">
                                    <Label className="font-bold" htmlFor="email">Email</Label>
                                    <Input
                                        className="focus:bg-blue-100  focus:border-blue-300"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 mb-2">
                                    <Label className="font-bold" htmlFor="password">Password</Label>
                                    <Input
                                        className="focus:bg-blue-100  focus:border-blue-300"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter new password"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 mb-2">
                                    <Label className="font-bold" htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input
                                        className="focus:bg-blue-100 focus:border-blue-300"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm the new password"
                                        required
                                    />
                                </div>
                                {/* to display the validation error message */}
                                <div className="flex justify-start">
                                    {error?.error && (
                                        <span className="text-red-500 text-sm">{error.message}</span>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor="terms" className="flex items-center space-x-2">
                                        <input type="checkbox" id="terms" name="terms" required />
                                        <span>
                                            I agree to the{" "}
                                            <a href="#" className="text-blue-500 hover:underline">
                                                terms and conditions
                                            </a>
                                        </span>
                                    </Label>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button
                                type="submit" disabled={loading}
                                className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-md shadow-black"
                            >
                                {loading && < Loader2 className="animate-spin" />}
                                Register
                            </Button>
                        </CardFooter>
                        <div>
                            <p className="text-center text-sm ">
                                Already have an account?{" "}
                                <a href="/login" className="text-blue-500 hover:underline">
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                </Card>
            </div>
        </main >
    );
}
