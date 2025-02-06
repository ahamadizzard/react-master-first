import { Suspense } from "react";
import React from "react";
import { Eye, Shell } from "lucide-react";

import { Button } from "@/components/ui/button";

import { getMoviesNewDB } from "@/lib/apis/server";

import Link from "next/link";
// import MovieTable from "./movies-table";
// import { MoviesTable } from "./movies-table";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import MovieData from "./movie-data";

export default async function DashboardPage() {
    // 1. Add shadcn card component
    // 2. Create Movies GET endpoint
    // 3. Read a dummy response
    // 4. Render data set in the UI

    // checking if the user having a session
    // const session = await auth.api.getSession({
    //     headers: await headers(),
    // });
    // console.log("session: ", session);
    const moviesQuery = await getMoviesNewDB();

    return (
        <div className="">
            <div className="flex justify-end  mb-6">
                <Link href="/moviesnewdb">
                    <Button variant="outline">
                        <Eye />
                        View as User
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-neutral-700 hover:text-blue-500">
                        Movies
                    </CardTitle>
                    <CardDescription className="italic">
                        View and manage your movies
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Suspense
                        fallback={
                            <div className="flex justify-center items-center h-[186px]">

                                <Shell className="animate-spin duration-1000 text-purple-600 ml-2" />
                            </div>
                        }
                    >
                        <MovieData />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    );
}
