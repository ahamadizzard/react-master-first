"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import EditMovieForm from "./edit-movie-form";
import { updateMovie } from "@/lib/actions/movie";

export default function MovieTable({ movies }) {
    const [editingMovie, setEditingMovie] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [deletingMovie, setDeletingMovie] = useState(null);
    const router = useRouter();

    const handleEdit = (movie) => {
        setEditingMovie(movie);
    };

    const handleEditSubmit = async (movie) => {
        const { id, title, year, plot, genres, rated, poster, imdbrating } = movie;
        setIsSaving(true);

        try {
            const resp = await updateMovie(id, { title, year, plot, genres, rated, poster, imdbrating });
            if (resp?.success) {
                setEditingMovie(null);
                router.refresh();
            } else {
                console.error("Failed to update movie");
            }
        } catch (error) {
            console.error("Error updating movie:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = (movie) => {
        // Implement delete functionality here
        console.log("Delete movie:", movie);
    };

    return (
        <div>
            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-extrabold"># Cover</TableHead>
                        <TableHead className="font-extrabold">Movie Title</TableHead>
                        <TableHead className="font-extrabold">Year</TableHead>
                        <TableHead className="font-extrabold">Rated</TableHead>
                        <TableHead className="font-extrabold">IMDB Rating</TableHead>
                        <TableHead className="font-extrabold">Plot</TableHead>
                        <TableHead className="font-extrabold">Genres</TableHead>
                        <TableHead className="font-extrabold text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {movies.map((movie) => (
                        <TableRow key={movie.id}>
                            <TableCell className="text-center">
                                {movie.poster ? (
                                    <img
                                        src={movie.poster}
                                        alt={movie.title || "Movie Poster"}
                                        style={{ width: '75px', height: 'auto' }}
                                    />
                                ) : (
                                    "N/A"
                                )}
                            </TableCell>
                            <TableCell>{movie?.title ?? "N/A"}</TableCell>
                            <TableCell>{movie?.year ?? "N/A"}</TableCell>
                            <TableCell>{movie?.rated ?? "N/A"}</TableCell>
                            <TableCell>{movie?.imdbrating ?? "N/A"}</TableCell>
                            <TableCell>{movie?.plot ?? "N/A"}</TableCell>
                            <TableCell>{movie?.genres?.join(", ") ?? "N/A"}</TableCell>
                            <TableCell>
                                <div className="flex justify-end space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleEdit(movie)}
                                        className="min-w-[120px] hover:bg-neutral-300 rounded-lg shadow-md"
                                        aria-label={`Edit ${movie.title}`}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete(movie)}
                                        className="min-w-[120px] hover:bg-red-900 rounded-lg shadow-md"
                                        aria-label={`Delete ${movie.title}`}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {editingMovie && (
                <EditMovieForm
                    movie={editingMovie}
                    open={true}
                    onSubmit={handleEditSubmit}
                    onCancel={() => setEditingMovie(null)}
                    isLoading={isSaving}
                />
            )}
        </div>
    );
}