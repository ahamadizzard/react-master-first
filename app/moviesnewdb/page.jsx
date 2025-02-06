import React from "react";
import { Eye, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMovies, getMoviesNewDB } from "@/lib/apis/server";
import Image from "next/image";


export default async function MoviesPublicPage() {
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
        <div className=" flex-1 my-2 h-screen overflow-y-scroll p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-blue-900 text-2xl font-bold mb-3">Movies</h1>
                <Link href="/dashboard/moviesnewdb">
                    <Button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"> <LayoutDashboard />Go to Dashboard</Button>
                </Link>
            </div>
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
                                        <CardTitle className="text-blue-900 hover:text-white">
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
                                </card>
                            </div>
                        )
                    )}
            </div>
            {/* <h1>Movies section ends here</h1> */}
        </div >
    );
}
