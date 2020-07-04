import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        style={{borderRadius:"10px"}}
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input style={{borderRadius:"10px"}} onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
