import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";

const PlacePage = ({ name }) => (
  <div>
    <h1>Welcome to {name}</h1>
    <p>This is the {name} page.</p>
  </div>
);

const Mypath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/new-york" element={<PlacePage name="New York" />} />
        <Route path="/los-angeles" element={<PlacePage name="Los Angeles" />} />
        <Route path="/chicago" element={<PlacePage name="Chicago" />} />
        <Route path="/san-francisco" element={<PlacePage name="San Francisco" />} />
        <Route path="/las-vegas" element={<PlacePage name="Las Vegas" />} />
      </Routes>
    </Router>
  );
};

export default Mypath;
