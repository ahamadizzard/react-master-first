//this is a simple example of an endpoint that returns an empty array of movies
import { NextResponse } from "next/server";
const MOVIES = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
  },
  {
    id: 4,
    title: "12 Angry Men",
    year: 1957,
    rating: 8.9,
    genre: "Drama",
  },
  {
    id: 5,
    title: "Schindler's List",
    year: 1993,
    rating: 8.9,
    genre: "Biography",
  },
  {
    id: 6,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 8.9,
    genre: "Adventure",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: "Crime",
  },
  {
    id: 8,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    rating: 8.8,
    genre: "Western",
  },
  {
    id: 9,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: "Western",
  },
];

export const GET = async (req) => {
  return NextResponse.json({
    success: true,
    movies: MOVIES,
  });
};
