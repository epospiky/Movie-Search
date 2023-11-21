import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Lagos",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
