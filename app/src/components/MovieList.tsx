import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  genres: string[];
  vote_average: number;
  release_date: string;
  overview: string;
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
          <li className="col-md-2 mb-3 mx-2" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.poster_path && (
                <img
                  className="rounded"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              )}
              <p style={{ color: "gray" }} className="fst-italic">
                {movie.vote_average.toFixed(1)}/10
              </p>
              <p
                style={{ color: "#067488", margin: 0 }}
                className=" text-wrap text-break fw-semibold h6"
              >
                {movie.title}
              </p>
              <p className="fst-normal fw-medium">{movie.release_date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
