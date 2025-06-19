import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch, onLocationClick }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for a city..." 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      <button 
        type="button" 
        className="location-btn" 
        title="Use current location"
        onClick={onLocationClick}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </button>
    </form>
  );
};

export default SearchBox;