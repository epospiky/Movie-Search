import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function Genre({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Check if the screen size is small (using Bootstrap classes)
  const isSmallScreen = window.innerWidth < 576;

  if (isSmallScreen) {
    return (
      <div className="col-md-4">
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found!</p>}
        <div className="accordion" id="accordionExample">
          {items.map((item, index) => (
            <div className="accordion-item" key={item}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    selectedIndex === index ? "active" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={selectedIndex === index ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                  }}
                >
                  {item}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  selectedIndex === index ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {/* Your item details here */}
                  <strong>{`This is the ${item}'s accordion body.`}</strong>
                  {/* Additional details... */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render the default list for larger screens
  return (
    <div className="col-md-4">
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;
