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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { stringify } from "postcss";
import { stringifyError } from "next/dist/shared/lib/utils";

const DEFAULT_ERROR = {
    error: false,
    message: "",
};

// this is a client component (functional component)
export default function RegisterForm() {
    // let errorStatus = false;
    const [error, setError] = useState(DEFAULT_ERROR); // this is a state variable to store the error message
    const handleSubmitForm = async (event) => {
        event?.preventDefault();
        const formData = new FormData(event?.currentTarget);
        const name = formData.get("name") ?? "";
        const email = formData.get("email") ?? "";
        const password = formData.get("password") ?? "";
        const confirmPassword = formData.get("confirmPassword") ?? "";
        const data = {
            name,
            email,
            password,
            confirmPassword,
        };
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                setError(DEFAULT_ERROR); // reset the error message
            } else {
                setError({
                    error: true,
                    message: "Passwords does not match",
                });
            }
        }
        console.log("Error Data: " + stringifyError(error));
    };
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Card className="w-[350px] mx-auto mt-8 bg-blue-50/90 ">
                <CardHeader className="text-center bg-blue-500 text-white ">
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
                            type="submit"
                            className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                        >
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
    );
}
