// client component
"use client";
import react, { useState } from "react";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/multi-select";
import { GENRES } from "@/lib/constants";
import { RATINGS } from "@/lib/constants";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { createMovie } from "@/lib/actions/movie";

import { useToast } from "@/hooks/use-toast";


const DEFAULT_ERROR = {
    error: false,
    message: "Movie added successfully",
};
export default function AddMovieForm() {
    const [error, setError] = useState(DEFAULT_ERROR);
    const [genres, setGenres] = react.useState([]);
    const [rated, setRated] = react.useState("");
    const [isLoading, setIsLoading] = react.useState(false);
    // const [clearGenres, setClearGenres] = react.useState(false);
    const { toast } = useToast();
    const genresList = GENRES.map((genre) => ({
        label: genre,
        value: genre,
    }));

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = formData.get("title")?.toString();
        const poster = formData.get("poster")?.toString();
        const year = Number(formData.get("year"));
        const plot = formData.get("plot")?.toString();
        const imdbrating = formData.get("imdbrating").toString();

        if (title && year && plot && rated && genres) {
            try {
                // console.log(title, year, plot, genres, rated);
                setError(DEFAULT_ERROR);
                setIsLoading(true);
                const resp = await createMovie({ title, year, plot, genres, rated, poster, imdbrating });
                if (resp.success) {

                    toast({
                        variant: "success",
                        title: "Success",
                        description: "Movie Added successfully",
                        // action: <ToastAction altText="Try Again">Try again</ToastAction>,
                    });
                    // router.push("/moviesnewdb");
                } else {
                    toast({
                        variant: "destructive",
                        title: "error",
                        description: "Adding Movie Failed " + response.error,
                        // action: <ToastAction altText="Try Again">Try again</ToastAction>,
                    });
                    setIsLoading(false);
                }
                console.log("Saving movie Response Data: ", response);
                setError(DEFAULT_ERROR);
                setIsLoading(false);
                router.push("/moviesnewdb");
                window.location.reload();

            }
            catch (error) {
                // setError("An unexpected error occurred. Please try again.");
                toast({
                    variant: "destructive",
                    title: "error",
                    description: "Adding Movie Failed " + response.error,
                    // action: <ToastAction altText="Try Again">Try again</ToastAction>,
                });
                setIsLoading(false);
            }
            finally {
                setIsLoading(false);
            }
        } else {
            setError("All fields are required.");
        }

    }
    const clearGenreList = () => {
        window.location.reload();
    };

    // setIsLoading(false);


    return (
        <Card className="max-w-2xl mx-auto rounded-t-3xl shadow-lg">
            <CardHeader className="flex flex-col rounded-t-3xl bg-blue-200">
                <CardTitle className="text-2xl text-blue-900">Add Movie</CardTitle>
                <CardDescription className="text-sm font-bold text-blue-900">
                    Add a Movie to the MFlix Database
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmitForm}>
                <CardContent className="space-y-4 text-blue-900">
                    <div>
                        <Label htmlFor="title" className="font-bold">Movie Title</Label>
                        <Input id="title" placeholder="Enter the movie title" name="title" />
                    </div>
                    <div>
                        <Label htmlFor="year" className="font-bold">Movie Year</Label>
                        <Input type="number" min="1900" max={new Date().getFullYear()} step="1" id="year" placeholder="Enter the year of the movie" name="year" />
                        {/* <p className="text-red-500" id="year-error" >Please enter a year between 1900 and {new Date().getFullYear()}.</p> */}
                    </div>
                    <div>
                        <Label htmlFor="plot" className="font-bold">Movie Plot</Label>
                        <Textarea id="plot" placeholder="Enter the plot of the movie" name="plot">

                        </Textarea>
                    </div>
                    <div>
                        <Label htmlFor="genres" className="font-bold">Movie Genres</Label>
                        <MultiSelect
                            list={genresList}
                            placeholder={"Select the genres of the movie"}
                            onValueChange={setGenres}
                        />
                    </div>
                    <div>
                        <Label htmlFor="imdbrating" className="font-bold">IMDB Rating</Label>
                        <Input type="number" step="any" min="1" max="10" id="imdbrating" placeholder="Enter the IMDB rating of the movie" name="imdbrating" />
                        {/* <p className="text-red-500" id="year-error" >Please enter a year between 1900 and {new Date().getFullYear()}.</p> */}
                    </div>
                    <div>
                        <label className="text-blue-900 " htmlFor="rated">Movie Rating</label>
                        <Select onValueChange={(val) => setRated(val)}>
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
                        <Input id="poster" placeholder="Enter the movie poster link" name="poster" />
                    </div>
                </CardContent>
                {/* to display the validation error message */}
                <div className="flex justify-start">
                    {error?.error && (
                        <span className="text-red-500 text-sm">{error.message}</span>
                    )}
                </div>
                <CardFooter className="w-full flex justify-end space-x-2">
                    <Button className="bg-blue-500 w-full h-8 rounded-md text-white hover:bg-blue-900" type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="animate-spin" />}
                        Add Movie
                    </Button>
                    <button onClick={clearGenreList} className="bg-blue-500 hover:bg-blue-900 h-8 w-3/6 rounded-md text-white" type="reset" variant="outline">Clear Form</button>
                </CardFooter>
            </form>
        </Card>
    )
}