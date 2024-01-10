import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "./MovieList";

interface MovieDetailsProps {}

const MovieDetails: React.FC<MovieDetailsProps> = ({}) => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const apiKey = "f578695cc79be0401e2ea5d010ca87d0";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(`this is the data ${data}`);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set a minimum height for better visibility
  };
  return (
    <div style={backgroundStyle}>
      <h1>{movie.title}</h1>
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_average.toFixed(2)}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {movie.genres.join(", ")}</p>
      <img
        style={{ width: "350px", height: "auto" }}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
    </div>
  );
};

export default MovieDetails;
