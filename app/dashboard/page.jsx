import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { getMovies } from "../libs/apis/server";
import Image from "next/image";
export default async function DashboardPage() {
    // 1. Add shadcn card component
    // 2. Create Movies GET endpoint
    // 3. Read a dummy response
    // 4. Render data set in the UI
    const moviesQuery = await getMovies();

    // console.log("Movies Data: " + JSON.stringify(moviesQuery));
    return (
        <main>
            {/* navbar section */}
            <nav className="bg-blue-300 w-full h-16 flex p-4 justify-start items-center">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Mflix Dashboard</h1>
                </div>
                <div className="flex justify-end items-center">
                    <a
                        className="bg-blue-400 flex hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
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
            {/* body section */}
            <div className="container mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {moviesQuery?.length &&
                        moviesQuery?.map(
                            (
                                moviesQuery // for each loop can also be used here
                            ) => (
                                <div
                                    key={moviesQuery?._id}
                                    className="h-full bg-blue-300 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105 "
                                >
                                    {moviesQuery?.id}
                                    <card className="h-full flex flex-col">
                                        <CardHeader>
                                            <CardTitle className="text-neutral-700 hover:text-blue-500">
                                                {moviesQuery?.title} {`(${moviesQuery?.year ?? "N/A"})`}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow">
                                            <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                                                <Image // Image component from next/image
                                                    src={moviesQuery.poster}
                                                    alt={moviesQuery.title}
                                                    className="w-full h-full object-contain rounded-lg"
                                                    width={200}
                                                    height={400}
                                                    priority={true}
                                                />
                                            </div>

                                            <CardDescription className="text-neutral-700 line-clamp-4 text-justify">
                                                {moviesQuery?.plot}
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-1 mt-2 text-sm font-semibold text-blue-900  ">
                                                {moviesQuery?.genres?.map((genre) => (
                                                    <Badge key={genre} variant="primary" className="mr-1">
                                                        {genre}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>

                                        <CardFooter className="flex justify-between items-center mt-auto">
                                            <Badge variant="secondary">
                                                Rating: {moviesQuery?.rated ?? "N/A"}
                                            </Badge>
                                            <Badge variant="destructive">
                                                IMDB: {moviesQuery?.imdb.rating}
                                            </Badge>
                                            <Badge variant="success" >
                                                {moviesQuery?.type}
                                            </Badge>
                                        </CardFooter>
                                    </card>
                                </div>
                            )
                        )}
                </div>
            </div>
        </main>
    );
}
