import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {
  const [text, setText] = useState("");
  
  const handleSearch = (e) => {
    setText(e.target.value);
  };
//   useEffect(() => {
//     searchStatus = localStorage.getItem("search");
//  }, [setText]);


  const navigate = useNavigate();

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a className="text-white" href="/home">
            Home
          </a>
          <a className="text-white" href="#">
            About
          </a>
          <a className="text-white" href="#">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-3 text-black"
          value={text}
          onChange={handleSearch}
        />
        <button
          className="p-2 text-white bg-red-600"
          onClick={() => {
            navigate("/result");
            onSearch(searchStatus);
            console.log(searchStatus);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
