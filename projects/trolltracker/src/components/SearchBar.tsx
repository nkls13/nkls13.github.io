import React from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search trolls..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ margin: "1rem 0", padding: "0.5rem", width: "100%" }}
    />
  );
};

export default SearchBar;
