import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DeleteMovieDialog({ open, movie, onConfirm, onCancel, isLoading }) {

    return (
        <Dialog open={open} onOpenChange={onCancel}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Movie</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete the movie{" "}
                        <b>{movie?.title || "this movie"}</b>? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onConfirm} disabled={isLoading} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Button>
                    <Button onClick={onCancel} disabled={isLoading} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}


