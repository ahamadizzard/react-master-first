import MovieTable from "./movie-table";
import { db } from "@/lib/mongodb";

//next.js will invalidate the cache when a request comes in at most once every 60 seconds
export const revalidate = 60;
export const dynamic = 'force-dynamic';
// Movie Data Server Component
export default async function MovieData() {
    try {
        const movieQuery = await db
            .collection("movies_n")
            .find({})
            .sort({ metacritic: -1 })
            .limit(50)
            .toArray();

        // Check if movieQuery is not empty
        if (movieQuery && movieQuery.length > 0) {
            // Refine movies query to an array
            const refineMovies = movieQuery.map((movie) => ({
                id: movie._id.toString(),
                title: movie.title,
                year: movie.year,
                genres: movie.genres,
                rated: movie.rated,
                imdbrating: movie.imdbrating,
                poster: movie.poster,
                plot: movie.plot,
            }));

            // Pass movie data to the movies table
            return <MovieTable movies={refineMovies} />;
        } else {
            // Return a message if no movies are found
            return (
                <div className="flex justify-center items-center h-[186.5px]">
                    <p className="text-gray-500 font-medium">No Movies Available</p>
                </div>
            );
        }
    } catch (error) {
        console.log(error);

        // Return an error message if something goes wrong
        return (
            <div className="flex justify-center items-center h-[186.5px]">
                <p className="text-red-500 font-medium animate-pulse duration-1000">Error fetching movies. Please try again later.</p>
            </div>
        );
    }
}