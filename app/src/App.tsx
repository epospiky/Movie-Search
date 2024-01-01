import Genre from "./components/ListGroup";
import Navbar from "./components/Navbar";
import "./App.css";

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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar />
      <Genre items={items} heading="Genres" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
