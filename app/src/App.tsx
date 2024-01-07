import Genre from "./components/ListGroup";
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  // Add more fields as needed
}
function App() {
  let items = [
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Fantasy",
    "Horror",
    "Thriller",
    "Romance",
    "Mystery",
    "Animation",
  ];

  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "f578695cc79be0401e2ea5d010ca87d0";

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        // Fetch popular movies
        const popularMoviesResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );

        if (!popularMoviesResponse.ok) {
          throw new Error(`Error: ${popularMoviesResponse.status}`);
        }

        const popularMoviesData = await popularMoviesResponse.json();
        console.log(popularMoviesData);
        // Fetch genres
        const genresResponse = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );

        if (!genresResponse.ok) {
          throw new Error(`Error: ${genresResponse.status}`);
        }

        const genresData = await genresResponse.json();

        // Map genre names to movie genres
        const moviesWithGenres = popularMoviesData.results.map(
          (movie: Movie) => ({
            ...movie,
            genres: movie.genre_ids.map((genreId: number) => {
              const genre = genresData.genres.find(
                (g: { id: number; name: string }) => g.id === genreId
              );
              return genre ? genre.name : "";
            }),
          })
        );

        setMovies(moviesWithGenres);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchPopularMovies();
  }, [apiKey]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const handleSelectItem = (selectedGenre: string) => {
    const filteredMovies = movies.filter((movie) =>
      movie.genres.includes(selectedGenre)
    );
    setSearchResults(filteredMovies);
  };
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails movie={movie} />} />
        <Route
          path="*"
          element={
            <MovieList
              movies={searchResults.length > 0 ? searchResults : movies}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
