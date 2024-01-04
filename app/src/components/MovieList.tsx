import React, { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  genres: string[];
}
interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  console.log("Movies:", movies);
  return (
    <div className="col-md-10">
      <h1 className="text-center ">Popular Movies</h1>
      <ul className="row" style={{ listStyleType: "none" }}>
        {movies.map((movie) => (
          <li className="col-md-2" key={movie.id}>
            {movie.poster_path && (
              <img
                className="rounded"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            )}
            <p className="text-uppercase text-wrap text-break fw-semibold fs-6">
              {movie.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
