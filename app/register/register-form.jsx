"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
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
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { signUp } from "@/lib/auth-client";

const DEFAULT_ERROR = {
    error: false,
    message: "",
};

// this is a client component (functional component)
export default function RegisterForm() {
    const [error, setError] = useState(DEFAULT_ERROR); // this is a state variable to store the error message
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const handleSubmitForm = async (event) => {
        event?.preventDefault();
        const formData = new FormData(event?.currentTarget);
        const name = formData.get("name").toString();
        const email = formData.get("email").toString();
        const role = "enduser";
        const password = formData.get("password").toString();
        const confirmPassword = formData.get("confirmPassword") ?? "";

        //Basic Validation logic
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                setError(DEFAULT_ERROR); // reset the error message
                setLoading(true);

                const { data, error } = await signUp.email({
                    email: email,
                    password: password,
                    name: name,
                    image: undefined,
                    role: role,
                },
                    {
                        onRequest: () => {
                            //console.log("onRequest",ctx);
                        },
                        onSuccess: (ctx) => {
                            // console.log("onSuccess", ctx);
                            // if (registerResponse?.error) {
                            // setError({ error: true, message: ctx.error.message });

                            // } else {
                            toast({
                                variant: "success",
                                title: "Success",
                                description: "User registered successfully",
                                action: <ToastAction altText="Try Again">Try again</ToastAction>,
                            });
                            setLoading(false);
                            redirect("/dashboard");
                            // }

                        },
                        onError: (ctx) => {
                            if (ctx) {
                                setError({
                                    error: true,
                                    message: ctx.error.message
                                });
                                setLoading(false);
                                toast({
                                    variant: "destructive",
                                    title: "error",
                                    description: "User registered Failed " + ctx.error.message,
                                    // action: <ToastAction altText="Try Again">Try again</ToastAction>,
                                });
                                setLoading(false);
                            }
                        },
                    }
                );
                if (data) {
                    console.log("data", data)
                }
            } else {
                setError({
                    error: true,
                    message: "Passwords does not match",
                });
            }
        }
    };
    return (
        <main>
            <div className="flex justify-center items-center min-h-screen ">
                <Card className="w-[350px] mx-auto mt-8 bg-blue-50/90 rounded-md shadow-black shadow-md  ">
                    <CardHeader className="text-center bg-blue-500 text-white rounded-t-md rounded-b-none  shadow-black shadow-md mt-0">
                        <CardTitle className="text-center bg-blue-500 text-white">Register</CardTitle>
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
