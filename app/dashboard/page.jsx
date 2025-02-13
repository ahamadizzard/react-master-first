"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function DashboardPage() {
    return (
        <div className='flex flex-col gap-4 p-6'>
            <div className='flex flex-row justify-center gap-10 '>
                <Card className='w-80 bg-blue-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
                    <CardHeader>
                        <CardTitle className="text-white font-bold text-2xl text-center">Total Movies</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className='w-80 bg-green-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
                    <CardHeader>
                        <CardTitle className="text-white font-bold text-2xl text-center">Total Users</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className='w-80 bg-orange-400 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105'>
                    <CardHeader>
                        <CardTitle className="text-white font-bold text-2xl text-center">Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
            <div>
                dashboard
            </div>
        </div>
    )
}

export default DashboardPage