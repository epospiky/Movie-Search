import Genre from "./components/ListGroup";
import Navbar from "./components/Navbar";
import "./App.css";
import MovieTab from "./components/MovieTab";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

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
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-md-2">
          <Genre
            items={items}
            heading="Genres"
            onSelectItem={handleSelectItem}
          />
        </div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
