import React, { useState } from "react";

interface SearchProps {
  onSearch: (searchInput: string) => void;
}
function Search({ onSearch }: SearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchInput(input);
    onSearch(input);
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
