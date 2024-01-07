import React from "react";
import { Movie } from "./MovieList";

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_average.toFixed(2)}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {movie.genres.join(", ")}</p>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
    </div>
  );
};

export default MovieDetails;
