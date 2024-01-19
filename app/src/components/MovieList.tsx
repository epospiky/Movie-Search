import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: string[];
  vote_average: number;
  release_date: string;
  overview: string;
}
interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleShow = (movie: Movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="col-sm-12 col-md-10">
      <h1 className="text-center ">Popular Movies</h1>
      <ul className="row" style={{ listStyleType: "none" }}>
        {movies.map((movie) => (
          <li
            className="col-xs-12 col-md-4 col-lg-2 mb-3 mx-2"
            key={movie.id}
            onClick={() => handleShow(movie)}
            style={{ cursor: "pointer" }}
          >
            {/* <Link to={`/movie/${movie.id}`}> */}
            {movie.poster_path && (
              <div className="img-cont">
                <img
                  className="rounded"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
                <div className="rating-cont">
                  <div className="rating-circle">
                    <div
                      className="rating-fill"
                      style={{ width: `${(movie.vote_average / 10) * 100}%` }}
                    >
                      <h6>{movie.vote_average.toFixed(1)}</h6>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p
              style={{ color: "#067488", margin: 0 }}
              className=" text-wrap text-break fw-semibold h6"
            >
              {movie.title}
            </p>
            <p className="fst-normal fw-medium">{movie.release_date}</p>
            {/* </Link> */}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <Modal
          show={show}
          onHide={handleClose}
          className="modal_bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-wrap text-center fw-semibold h6 modal-title">
              {selectedMovie.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
              alt={`${selectedMovie.title} Poster`}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <p>{selectedMovie.vote_average.toFixed(1)}/10</p>
            <p>{selectedMovie.overview}</p>
            <p className="fst-normal fw-medium">{selectedMovie.release_date}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default MovieList;
