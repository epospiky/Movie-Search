import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Genre from "./components/Genre";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

interface Movie {
  genre_ids: any;
  genres: any;
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const apiKey = "f578695cc79be0401e2ea5d010ca87d0";
  const [darkMode, setDarkMode] = useState(false);
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

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (searchInput: string) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

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
      <body className={`container-fluids ${darkMode ? "darkMode" : ""}`}>
        <Navbar
          movies={movies}
          onSearch={handleSearch}
          onModeToggle={handleModeToggle}
        />
        <div className="row">
          <div className="col-md-2">
            <Genre
              items={["All", ...new Set(movies.flatMap((m) => m.genres))]}
              heading="Genres"
              onSelectItem={handleSelectItem}
            />
          </div>
          <Routes>
            <Route
              path="*"
              element={
                <MovieList
                  movies={searchResults.length > 0 ? searchResults : movies}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </body>
    </Router>
  );
}

export default App;
