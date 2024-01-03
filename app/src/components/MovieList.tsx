import React, { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  // Add more fields as needed
}
interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  console.log("Movies:", movies); // Add this line to log the movies
  return (
    <div className="col-md-10">
      <h1 className="text-center">Popular Movies</h1>
      <ul className="row" style={{ listStyleType: "none" }}>
        {movies.map((movie) => (
          <li className="col-md-3" key={movie.id}>
            <p style={{ color: "#067488" }}>{movie.title}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
