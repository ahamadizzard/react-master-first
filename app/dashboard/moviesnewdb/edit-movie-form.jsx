"use client";
import react, { useState } from "react";
import { Loader2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { MultiSelect } from "@/components/multi-select";
import { GENRES, RATINGS } from "@/lib/constants";

import { useToast } from "@/hooks/use-toast";

const DEFAULT_ERROR = {
    error: false,
    message: "Movie added successfully",
};

export default function EditMovieForm({ movie, open, onSubmit, onCancel, isLoading }) {

    const [error, setError] = useState(DEFAULT_ERROR);
    const [title, setTitle] = react.useState(movie?.title);
    const [year, setYear] = react.useState(movie?.year);
    const [plot, setPlot] = react.useState(movie?.plot);
    const [genres, setGenres] = react.useState(movie?.genres);
    const [rated, setRated] = react.useState(movie?.rated);
    const [poster, setPoster] = react.useState(movie?.poster);
    const [imdbrating, setImdbRating] = react.useState(movie?.imdbrating || 0);

    // const [isLoading, setIsLoading] = react.useState(false);
    // const [clearGenres, setClearGenres] = react.useState(false);
    const { toast } = useToast();
    const genresList = GENRES.map((genre) => ({
        label: genre,
        value: genre,
    }));
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        //Save changes to the database
        // onSubmit({ ...movie, title, year, genres, poster, rated, plot, imdbrating: { rating: imdbrating } });
        onSubmit({ ...movie, title, year, plot, genres, poster, rated, imdbrating: imdbrating });
    }
    const clearGenreList = () => {
        setTitle("");
        setYear("");
        setPlot("");
        setGenres([]);
        setRated("");
        setPoster("");
        setImdbRating(0);
    };
    return (
        <div>
            <Dialog open={open} onOpenChange={onCancel}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Movie</DialogTitle>
                        <DialogDescription>
                            Edit the movie details.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmitForm}>
                        <div className="space-y-4 text-blue-900">
                            <div>
                                <Label htmlFor="title" className="font-bold">Movie Title</Label>
                                <Input
                                    id="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    placeholder="Enter the movie title"
                                    name="title" />
                            </div>
                            <div>
                                <Label htmlFor="year" className="font-bold">Movie Year</Label>
                                <Input
                                    type="number"
                                    min="1900"
                                    max={new Date().getFullYear()} step="1"
                                    onChange={(e) => setYear(Number(e.target.value))}
                                    value={year}
                                    id="year"
                                    placeholder="Enter the year of the movie" name="year" />
                            </div>
                            <div>
                                <Label htmlFor="plot" className="font-bold">Movie Plot</Label>
                                <Textarea
                                    id="plot"
                                    onChange={(e) => setPlot(e.target.value)}
                                    value={plot}
                                    placeholder="Enter the plot of the movie"
                                    name="plot">
                                </Textarea>
                            </div>
                            <div>
                                <Label htmlFor="genres" className="font-bold">Movie Genres</Label>
                                <MultiSelect
                                    list={genresList}
                                    value={genres}
                                    onChange={(val) => setGenres(val)}
                                    placeholder={"Select the genres of the movie"}
                                    onValueChange={setGenres}
                                    selectedItems={genres}
                                />
                            </div>
                            <div>
                                <Label htmlFor="imdbrating" className="font-bold">IMDB Rating</Label>
                                <Input
                                    type="number"
                                    step="0.1" min="1" max="10"
                                    id="imdbrating"
                                    placeholder="Enter the IMDB rating of the movie"
                                    name="imdbrating"
                                    value={imdbrating} //controlled input
                                    onChange={(e) => setImdbRating(Number(e.target.value))} //controlled input
                                />
                            </div>
                            <div>
                                <label className="text-blue-900 " htmlFor="rated">Movie Rating</label>
                                <Select
                                    value={rated}
                                    onValueChange={(val) => setRated(val)}
                                >
                                    <SelectTrigger className="text-gray-500">
                                        <SelectValue placeholder="Select a rating" />
                                    </SelectTrigger>
                                    <SelectContent className="text-blue-600">
                                        {RATINGS.map((rating) => (
                                            <SelectItem key={rating} value={rating}>
                                                {rating}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="poster" className="font-bold">Movie Poster</Label>
                                <Input
                                    id="poster"
                                    value={poster}
                                    onChange={(e) => setPoster(e.target.value)}
                                    placeholder="Enter the movie poster link"
                                    name="poster"
                                />
                            </div>
                            <div className="w-full flex justify-end space-x-2">
                                <Button className="bg-blue-500 w-full h-8 rounded-md text-white hover:bg-blue-900" type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="animate-spin" />}
                                    Save Changes
                                </Button>
                                <button onClick={clearGenreList} className="bg-blue-500 hover:bg-blue-900 h-8 w-3/6 rounded-md text-white" type="reset" variant="outline">Clear Form</button>
                            </div>
                        </div>
                        {/* to display the validation error message */}
                        <div className="flex justify-start">
                            {error?.error && (
                                <span className="text-red-500 text-sm">{error.message}</span>
                            )}
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
