import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSearch = () => {
    // Validate input and perform search logic
    if (checkInDate && checkOutDate && roomType) {
      const searchData = {
        checkInDate,
        checkOutDate,
        roomType,
      };
      onSearch(searchData);
    } else {
      alert('Please fill in all fields to perform a search.');
    }
  };

  return (
    <div className="search-form-container">
      <h2>Find Your Ideal Stay</h2>
      <div className="search-input">
        <label>Check-in Date:</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="search-input">
        <label>Check-out Date:</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div className="search-input">
        <label>Room Type:</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">Select Room Type</option>
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Suite</option>
          {/* Add more room types as needed */}
        </select>
      </div>
      <button className="search-btn" onClick={handleSearch}>
        Search Now
      </button>
    </div>
  );
}

export default SearchForm;
