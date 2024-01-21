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

  return (
    <div>
      {isSmallScreen ? (
        <div className="accordion" id="genreAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#genreAccordionBody"
                aria-expanded={selectedIndex !== -1 ? "true" : "false"}
                aria-controls="genreAccordionBody"
              >
                {heading}
              </button>
            </h2>
            <div
              id="genreAccordionBody"
              className={`accordion-collapse collapse ${
                selectedIndex !== -1 ? "show" : ""
              }`}
              data-bs-parent="#genreAccordion"
            >
              <div className="accordion-body">
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
            </div>
          </div>
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default Genre;
