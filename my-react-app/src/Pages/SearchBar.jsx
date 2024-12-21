import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  // Sample data for places
  const places = [
    { id: 1, name: "New York", description: "The city that never sleeps.", path: "/new-york" },
    { id: 2, name: "Los Angeles", description: "The city of angels.", path: "/los-angeles" },
    { id: 3, name: "Chicago", description: "The windy city.", path: "/chicago" },
    { id: 4, name: "San Francisco", description: "The golden city.", path: "/san-francisco" },
    { id: 5, name: "Las Vegas", description: "The entertainment capital.", path: "/las-vegas" },
  ];

  const [query, setQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const results = places.filter((place) =>
      place.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPlaces(results);
  };

  const handlePlaceClick = (path) => {
    navigate(path);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a place..."
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <ul className="suggestions-list">
          {filteredPlaces.map((place) => (
            <li
              key={place.id}
              className="suggestion-item"
              onClick={() => handlePlaceClick(place.path)}
            >
              {place.name}
            </li>
          ))}
        </ul>
      )}
      <div className="cards-container">
        {places.map((place) => (
          <div key={place.id} className="card">
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
