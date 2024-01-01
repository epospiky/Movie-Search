import React, { useState } from "react";
import { useEffect } from "react";

function Search() {
  const [searchInput, setSearchinput] = useState("");
  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchinput(event.target.value);
  };
  return (
    <>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search movies... "
        className="searchbox form-control rounded-pill"
        name="search"
      />
      <h6>{searchInput}</h6>
    </>
  );
}

export default Search;
