"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Using Next.js router for navigation
import { getMovies, deleteMovie } from "@/lib/actions/movie"; // Import API functions
import { Button } from "@/components/ui/button";
import { getMoviesNewDB } from "@/lib/apis/server";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getMovies();
                // const response = await getMoviesNewDB();
                setMovies(response);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, []);

    const handleEdit = (movieId) => {
        router.push(`/edit-movie/${movieId}`); // Navigate to edit page
    };

    const handleDelete = async (movieId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
        if (confirmDelete) {
            try {
                await deleteMovie(movieId);
                alert("Movie deleted successfully");
                setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== movieId));
            } catch (error) {
                alert("Failed to delete movie");
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Movies List</h1>

            {isLoading ? (
                <div>Loading movies...</div>
            ) : movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Year</th>
                            <th className="py-2 px-4 border">Genres</th>
                            <th className="py-2 px-4 border">Rated</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id} className="text-center border-b">
                                <td className="py-2 px-4">{movie.title}</td>
                                <td className="py-2 px-4">{movie.year}</td>
                                <td className="py-2 px-4">{movie.genres.join(", ")}</td>
                                <td className="py-2 px-4">{movie.rated}</td>
                                <td className="py-2 px-4 flex justify-center space-x-2">
                                    <Button onClick={() => handleEdit(movie._id)}>Edit</Button>
                                    <Button variant="destructive" onClick={() => handleDelete(movie._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
