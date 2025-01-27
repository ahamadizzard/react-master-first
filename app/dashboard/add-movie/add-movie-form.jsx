// client component
"use client";
import react from "react";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/multi-select";
import { GENRES } from "@/lib/constants";
import { RATINGS } from "@/lib/constants";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardBody, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { createMovie } from "@/lib/actions/movie";


export default function AddMovieForm() {
    const [genres, setGenres] = react.useState([]);
    const [rated, setRated] = react.useState("");
    const [isLoading, setIsLoading] = react.useState(false);
    const genresList = GENRES.map((genre) => ({
        label: genre,
        value: genre,
    }));

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = formData.get("title")?.toString();
        const year = Number(formData.get("year"));
        const plot = formData.get("plot")?.toString();

        if (title && year && plot && rated && genres) {
            console.log(title, year, plot, genres, rated);
            setIsLoading(true);
            await createMovie({ title, year, plot, genres, rated });
            setIsLoading(false);
        }
        // setIsLoading(false);
    };

    return (
        <Card className="max-w-2xl mx-auto rounded-t-3xl shadow-lg">
            <CardHeader className="flex flex-col rounded-t-3xl bg-gray-400">
                <CardTitle>Add Movie</CardTitle>
                <CardDescription className="text-sm text-gray-900">
                    Add a Movie to the MFlix Database
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmitForm}>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="title" className="font-bold">Movie Title</Label>
                        <Input id="title" placeholder="Enter the movie title" name="title" />
                    </div>
                    <div>
                        <Label htmlFor="year" className="font-bold">Movie Year</Label>
                        <Input id="year" placeholder="Enter the year of the movie" name="year" />
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
                        <label htmlFor="rated">Movie Rating</label>
                        <Select onValueChange={(val) => setRated(val)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a rating" />
                            </SelectTrigger>
                            <SelectContent>
                                {RATINGS.map((rating) => (
                                    <SelectItem key={rating} value={rating}>
                                        {rating}
                                    </SelectItem>
                                ))}
                            </SelectContent>

                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="w-full flex justify-end space-x-2">
                    <button type="reset" variant="outline">Clear form</button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="animate-spin" />}
                        Add Movie
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}