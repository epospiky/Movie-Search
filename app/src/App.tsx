import Genre from "./components/ListGroup";
import Navbar from "./components/Navbar";
import "./App.css";
import MovieTab from "./components/MovieTab";

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

  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch("https://api.themoviedb.org/3/authentication", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

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
        <MovieTab />
      </div>
    </div>
  );
}

export default App;
