import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

const names = [
  "Adrian",
  "Aathavan",
  "Bruntha",
  "Daniel",
  "Erika",
  "Konstantin",
  "Liliana",
  "Nancy",
  "Samson",
  "Tara",
  "Wesley",
  "Zander"
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    let results = [];
    if (searchTerm === "") {
      document.getElementById("targetElement").style.display = "none";
    } else {
      document.getElementById("targetElement").style.display = "block";
    }
    results = names.filter((item) => item.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <h2>Start editing to see some magic happen!</h2>
      <h3>Display results below</h3>
      <div id="targetElement">
        <ul>
          {searchResults.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
