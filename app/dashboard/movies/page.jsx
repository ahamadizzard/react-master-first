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
import { getMovies } from "@/lib/apis/server";
import Image from "next/image";


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
    const moviesQuery = await getMovies();

    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-3">Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {moviesQuery?.length &&
                    moviesQuery?.map(
                        (
                            moviesQuery // for each loop can also be used here
                        ) => (
                            <div
                                key={moviesQuery?._id}
                                className="h-full "
                            >
                                {moviesQuery?.id}
                                <Card className="h-full flex flex-col  bg-blue-300 rounded-lg shadow-md p-1 transition-transform duration-300 ease-in-out hover:scale-105">
                                    <CardHeader>
                                        <CardTitle className="text-neutral-700 hover:text-blue-500">
                                            {moviesQuery?.title} {`(${moviesQuery?.year ?? "N/A"})`}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex-grow">
                                        <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                                            {moviesQuery?.poster && (
                                                <Image // Image component from next/image
                                                    src={moviesQuery?.poster}
                                                    alt={moviesQuery?.title}

                                                    className="w-full h-full object-contain rounded-lg"
                                                    width={200}
                                                    height={400}
                                                    priority={true}
                                                // onError={() => setImageSrc("@/public/images/notfound.png")}
                                                // onError={handleImageError}
                                                />)}
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
                                            IMDB: {moviesQuery?.imdb?.rating || "N/A"}
                                        </Badge>
                                        <Badge variant="success">
                                            {moviesQuery?.type || "Unknown"}
                                        </Badge>

                                    </CardFooter>
                                </Card>
                            </div>
                        )
                    )}
            </div>
        </div >
    );
}
