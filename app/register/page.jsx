import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import RegisterForm from "./register-form";

// this is a server component functional component
export default async function RegisterPage() {
    //this will get the session from the server
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="container mx-auto">
            <RegisterForm />
        </div>
    )
}
