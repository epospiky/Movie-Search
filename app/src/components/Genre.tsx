import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function Genre({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
