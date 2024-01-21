import React, { useState } from "react";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieList, { Movie } from "./MovieList";
import "../App.css";

interface NavbarProps {
  movies: Movie[];
  onSearch: (searchInput: string) => void;
  onModeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ movies, onSearch, onModeToggle }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [isToggled, setIsToggled] = useState(false);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchInput(input);
    onSearch(input);
  };
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="row">
      <nav className="col-12 navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <div className="navbar-brand w-25">
            <a href="#">
              <img src={logo} alt="Logo" className="w-50 h-50" />
            </a>
          </div>
          <div className="col-auto w-50" id="">
            <label className=" w-100" htmlFor="search">
              <FontAwesomeIcon
                icon={faSearch}
                className="fasearch"
                aria-hidden="true"
              />
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search movies... "
                className="searchbox form-control rounded-pill"
                name="search"
              />
            </label>
          </div>
          <div className="mode-box w-25">
            <li className="mode__box ">
              <div
                className="mode__box--container rounded-pill"
                onClick={() => {
                  handleToggle();
                  onModeToggle();
                }}
              >
                <div
                  className={`switch rounded-circle ${
                    isToggled ? "darkOn" : ""
                  }`}
                ></div>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
