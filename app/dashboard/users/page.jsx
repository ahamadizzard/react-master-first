import { Suspense } from "react";
import { Shell } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import UserData from "@/app/dashboard/users/user-data";
export default function UsersPage() {
    return (
        <div>
            <h1>Users</h1>
            <Card>
                <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>View and manage user accounts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Suspense
                        fallback={
                            <div className="flex justify-center items-center h-32">
                                Loading...
                                <Shell className="animate-spin duration-1000 text-gray-400" />
                            </div>
                        }>
                        {/* <UserData /> */}
                    </Suspense>
                </CardContent>
            </Card>

        </div >
    );
}
