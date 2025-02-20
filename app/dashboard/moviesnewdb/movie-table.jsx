// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import {
//     Table,
//     TableHeader,
//     TableBody,
//     TableHead,
//     TableRow,
//     TableCell,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import EditMovieForm from "./edit-movie-form";
// import { updateMovie, deleteMovie } from "@/lib/actions/movie";
// import DeleteMovieDialog from "./delete-movie-dialog";

// export default function MovieTable({ movies }) {
//     const [editingMovie, setEditingMovie] = useState(null);
//     const [isSaving, setIsSaving] = useState(false);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [deletingMovie, setDeletingMovie] = useState(null);
//     const router = useRouter();

//     const handleEdit = (movie) => {
//         setEditingMovie(movie);
//     };

//     const handleEditSubmit = async (movie) => {
//         const { id, title, year, plot, genres, rated, poster, imdbrating } = movie;
//         setIsSaving(true);

//         try {
//             const resp = await updateMovie(id, { title, year, plot, genres, rated, poster, imdbrating });
//             if (resp?.success) {
//                 setEditingMovie(null);
//                 router.refresh();
//             } else {
//                 console.error("Failed to update movie");
//             }
//         } catch (error) {
//             console.error("Error updating movie:", error);
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     const handleDelete = (movie) => {
//         setDeletingMovie(movie);
//     };

//     const handleDeleteConfirm = async (movieId) => {
//         setIsDeleting(true);
//         const resp = await deleteMovie(movieId);
//         setIsDeleting(false);
//         if (resp.success) {
//             setDeletingMovie(null);
//             router.refresh();
//         };
//     };


//     return (
//         <div>
//             <Table className="border">
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="font-extrabold"># Cover</TableHead>
//                         <TableHead className="font-extrabold">Movie Title</TableHead>
//                         <TableHead className="font-extrabold">Year</TableHead>
//                         <TableHead className="font-extrabold">Rated</TableHead>
//                         <TableHead className="font-extrabold">IMDB Rating</TableHead>
//                         <TableHead className="font-extrabold">Plot</TableHead>
//                         <TableHead className="font-extrabold">Genres</TableHead>
//                         <TableHead className="font-extrabold text-center">Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {movies.map((movie) => (
//                         <TableRow key={movie.id}>
//                             <TableCell className="text-center">
//                                 {movie.poster ? (
//                                     <Image
//                                         src={movie.poster}
//                                         alt={movie.title || "Movie Poster"}
//                                         width={75}
//                                         height={100}
//                                     />
//                                 ) : (
//                                     "N/A"
//                                 )}
//                             </TableCell>
//                             <TableCell>{movie?.title ?? "N/A"}</TableCell>
//                             <TableCell>{movie?.year ?? "N/A"}</TableCell>
//                             <TableCell>{movie?.rated ?? "N/A"}</TableCell>
//                             <TableCell>{movie?.imdbrating ?? "N/A"}</TableCell>
//                             <TableCell>{movie?.plot ?? "N/A"}</TableCell>
//                             <TableCell>{movie?.genres?.join(", ") ?? "N/A"}</TableCell>
//                             <TableCell>
//                                 <div className="flex justify-end space-x-2">
//                                     <Button
//                                         variant="outline"
//                                         size="sm"
//                                         onClick={() => handleEdit(movie)}
//                                         className="min-w-[120px] hover:bg-neutral-300 rounded-lg shadow-md"
//                                         aria-label={`Edit ${movie.title}`}
//                                     >
//                                         Edit
//                                     </Button>
//                                     <Button
//                                         variant="destructive"
//                                         size="sm"
//                                         onClick={() => handleDelete(movie)}
//                                         className="min-w-[120px] hover:bg-red-900 rounded-lg shadow-md"
//                                     // aria-label={`Delete ${movie.title}`}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </div>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>

//             {editingMovie && (
//                 <EditMovieForm
//                     movie={editingMovie}
//                     open={true}
//                     onSubmit={handleEditSubmit}
//                     onCancel={() => setEditingMovie(null)}
//                     isLoading={isSaving}
//                 />
//             )}
//             {deletingMovie &&
//                 <DeleteMovieDialog
//                     movie={deletingMovie}
//                     open={true}
//                     onCancel={() => setDeletingMovie(null)}
//                     onConfirm={() => handleDeleteConfirm(deletingMovie?.id)}
//                     isLoading={isDeleting}
//                 />
//             }
//         </div>
//     );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
import { updateMovie, deleteMovie } from "@/lib/actions/movie";
import DeleteMovieDialog from "./delete-movie-dialog";

export default function MovieTable({ movies }) {
    const [editingMovie, setEditingMovie] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletingMovie, setDeletingMovie] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [yearFilter, setYearFilter] = useState("");
    const [genresFilter, setGenresFilter] = useState("");
    const [imdbRatingFilter, setImdbRatingFilter] = useState("");
    const [ratedFilter, setRatedFilter] = useState("");
    const router = useRouter();
    let counter = 1;

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
        setDeletingMovie(movie);
    };

    const handleDeleteConfirm = async (movieId) => {
        setIsDeleting(true);
        const resp = await deleteMovie(movieId);
        setIsDeleting(false);
        if (resp.success) {
            setDeletingMovie(null);
            router.refresh();
        };
    };

    // Filter movies based on search criteria
    const filteredMovies = movies.filter((movie) => {
        const matchesTitle = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = yearFilter ? movie.year.toString() === yearFilter : true;
        const matchesGenres = genresFilter ? movie.genres?.includes(genresFilter) : true;
        const matchesImdbRating = imdbRatingFilter ? movie.imdbrating >= parseFloat(imdbRatingFilter) : true;
        const matchesRated = ratedFilter ? movie.rated === ratedFilter : true;

        return matchesTitle && matchesYear && matchesGenres && matchesImdbRating && matchesRated;
    });

    // Paginate movies
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Total number of pages
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <div className="mb-4 text-end">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border rounded w-full hover:border-gray-500"
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Filter by year..."
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                        className="p-2 border rounded hover:border-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="Filter by genre..."
                        value={genresFilter}
                        onChange={(e) => setGenresFilter(e.target.value)}
                        className="p-2 border rounded hover:border-gray-500"
                    />
                    <input
                        type="number"
                        placeholder="Filter by IMDB rating (min)..."
                        value={imdbRatingFilter}
                        onChange={(e) => setImdbRatingFilter(e.target.value)}
                        className="p-2 border rounded hover:border-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="Filter by rated..."
                        value={ratedFilter}
                        onChange={(e) => setRatedFilter(e.target.value)}
                        className="p-2 border rounded hover:border-gray-500"
                    />


                </div>
                <Table className="border">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-extrabold text-center">#</TableHead>
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
                        {currentMovies.map((movie) => (
                            <TableRow key={movie.id}>
                                <TableCell className="text-center">{counter++}</TableCell>
                                <TableCell className="text-center">
                                    {movie.poster ? (
                                        <Image
                                            src={movie.poster}
                                            alt={movie.title || "Movie Poster"}
                                            width={75}
                                            height={100}
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
                                        // aria-label={`Delete ${movie.title}`}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4">
                    <Button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastMovie >= filteredMovies.length}
                    >
                        Next
                    </Button>
                </div>

                {editingMovie && (
                    <EditMovieForm
                        movie={editingMovie}
                        open={true}
                        onSubmit={handleEditSubmit}
                        onCancel={() => setEditingMovie(null)}
                        isLoading={isSaving}
                    />
                )}
                {deletingMovie &&
                    <DeleteMovieDialog
                        movie={deletingMovie}
                        open={true}
                        onCancel={() => setDeletingMovie(null)}
                        onConfirm={() => handleDeleteConfirm(deletingMovie?.id)}
                        isLoading={isDeleting}
                    />
                }
            </div>
        </div>
    );
}