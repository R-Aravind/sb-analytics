import React from "react";
import Search_icon from "./icons/search.svg";
import { useState } from "react";

const Search = () => {
  const [query, setquery] = useState("");
  return (
    <div className="search-bar">
      <img src={Search_icon} alt="" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <select id="">
        <option value="member-id">Member ID</option>
      </select>
      <button>SEARCH</button>
    </div>
  );
};

export default Search;
