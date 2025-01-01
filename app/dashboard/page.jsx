// import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { getMovies } from "../libs/apis/server";
export default async function DashboardPage() {
    // 1. Add shadcn card component
    // 2. Create Movies GET endpoint
    // 3. Read a dummy response
    // 4. Render data set in the UI
    const moviesQuery = await getMovies();

    console.log("Movies Data: " + JSON.stringify(moviesQuery));
    return (
        <main>
            {/* navbar section */}
            <nav className="bg-blue-300 w-full h-16 flex p-4 justify-start items-center">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Mflix Dashboard</h1>
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
                                    className="h-full bg-blue-300 rounded-lg shadow-md p-1 "
                                >
                                    {moviesQuery?.id}
                                    {/* {moviesQuery.title} */}
                                    <card className="h-full flex flex-col">
                                        <CardHeader>
                                            <CardTitle className="text-neutral-700 hover:text-blue-500">
                                                {moviesQuery?.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow">
                                            <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded-lg">
                                                <img
                                                    src={moviesQuery?.poster}
                                                    alt={moviesQuery?.title}
                                                    className="w-auto h-full object-contain rounded-lg"
                                                    width={200}
                                                    height={400}
                                                />
                                            </div>
                                            <CardDescription className="text-neutral-700 text-justify">
                                                {moviesQuery?.plot}
                                            </CardDescription>
                                        </CardContent>

                                        <CardFooter className="flex justify-between items-center mt-auto">
                                            <span className="text-neutral-700 text-large font-bold">
                                                Year: {moviesQuery?.year}
                                            </span>
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
