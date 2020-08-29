import React from "react";
import Search_icon from "./icons/search.svg";
import "./Search.css";

const Search = ({ query, setQuery, setCategory }) => {
  return (
    <div className="search-bar">
      <img src={Search_icon} alt="" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* 👇🏻the select menu to select search category  */}
      <select
        onChange={(e) => {
          console.log("boo");
          setCategory(e.target.value);
        }}
      >
        <option value="member_id">Member ID</option>
        <option value="name">Name</option>
        <option value="renewal_category">Status</option>
      </select>
      <button>SEARCH</button>
    </div>
  );
};

export default Search;
