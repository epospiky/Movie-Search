import React, { useState } from "react";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import MovieList, { Movie } from "./MovieList";

interface NavbarProps {
  movies: Movie[];
}
const Navbar: React.FC<NavbarProps> = ({ movies }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };
  const handleSearch = (searchInput: string) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className={`row ${darkMode ? "darkMode" : ""}`}>
      <nav
        className={`col-12 navbar navbar-expand-lg bg-body-tertiary ${
          darkMode ? "darkMode" : ""
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand w-25" href="#">
            <img src={logo} alt="Logo" className="w-50 h-50" />
          </a>
          <div className="col-auto w-50" id="">
            <label htmlFor="search">
              <FontAwesomeIcon
                icon={faSearch}
                className="fasearch"
                aria-hidden="true"
              />
              <Search onSearch={handleSearch} />
            </label>
          </div>
          <div className="mode-box w-25">
            <li
              className="list-none mode__box "
              style={{ listStyleType: "none" }}
            >
              <div
                className="mode__box--container rounded-pill"
                style={{
                  cursor: "pointer",
                  background: "gray",
                  position: "relative",
                  width: "50px",
                  height: "25px",
                  paddingTop: "1px",
                  paddingLeft: "1px",
                  paddingRight: "1px",
                }}
                onClick={handleModeToggle}
              >
                <div
                  className="switch rounded-circle"
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    width: "23px",
                    height: "23px",
                  }}
                ></div>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Navbar;
