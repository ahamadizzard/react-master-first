"use client";
import { useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { EditMovieForm } from "./edit-movie-form";
import EditMovieForm from "./edit-movie-form";

export default function MovieTable({ movies }) {
    const [editingMovie, setEditingMovie] = useState(null);
    const [deletingMovie, setDeletingMovie] = useState(null);

    const handleEdit = (movie) => {
        setEditingMovie(movie);
    }
    const handleDelete = (movie) => {
        setDeletingMovie(movie);
    }
    return (
        <div>
            <Table className="border">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-extrabold"> # Cover</TableHead>
                        <TableHead className="font-extrabold">Movie Title</TableHead>
                        <TableHead className="font-extrabold">Year</TableHead>
                        <TableHead className="font-extrabold">Rated</TableHead>
                        <TableHead className="font-extrabold">IMDB Rating</TableHead>
                        <TableHead className="font-extrabold">Plot</TableHead>
                        <TableHead className="font-extrabold">Genres</TableHead>
                        <TableHead className="font-extrabold text-center">Actions</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody >
                    {movies.map((movie) => (
                        <TableRow key={movie.id}>
                            <TableCell className="text-center">
                                {movie.poster ? (
                                    <img src={movie.poster} alt={movie.title} style={{ width: '75px', height: 'auto' }} />
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
                                <div className="flex justify-end space-x-2 ">
                                    <Button variant="outline" size="sm" onClick={() => handleEdit(movie)} className="min-w-[120px] hover:bg-neutral-300 rounded-lg shadow-md">Edit</Button>
                                    <Button variant="destructive" size="sm" onClick={() => handleDelete(movie)} className="min-w-[120px] hover:bg-red-900 rounded-lg shadow-md">Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {editingMovie && (
                    < EditMovieForm
                        movie={editingMovie}
                        open={true}
                        onCancel={() => setEditingMovie(null)}
                        isLoading={true}
                    />
                )}
            </Table>

        </div>
    )
}
