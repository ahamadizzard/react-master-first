
// import { getMoviesNewDB } from "@/lib/apis/server";
import MovieTable from "./movie-table";
import clientPromise from "@/lib/mongodb";
//Movie Data Server Component
// Server action to call the database directly

export default async function MovieData() {
    try {
        const client = await clientPromise();
        const db = client.db("sample_mflix");

        const movieQuery = await db
            .collection("movies_n")
            .find({})
            .sort({ metacritic: -1 })
            .limit(50)
            .toArray();

        if (movieQuery) {
            //refine movies query to an array
            const refineMovies = movieQuery.map((movie) => (({
                id: movie._id.toString(),
                title: movie.title,
                year: movie.year,
                genres: movie.genres,
                rated: movie.rated,
                imdbrating: movie.imdbrating,
                poster: movie.poster,
                plot: movie.plot,
            })))
            //Pass movie data to the movies table
            // Return MovieTable
            return <MovieTable movies={refineMovies} />
        }
    } catch (error) {
        // console.log(error);

        return (
            <div className="flex justify-center items-center h-[186.5px]">
                <p className="text-red-500 font-medium animate-pulse duration-1000">No Movies Available</p>
            </div>
        )
    }
}
