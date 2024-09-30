import React, { useState, useEffect } from "react";

const FilterSidebar = ({ onFiltersChange }) => {
  // States for each filter option
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [performer, setPerformer] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [eventType, setEventType] = useState("");

  // Trigger the callback function whenever any filter state changes
  useEffect(() => {
    onFiltersChange({
      genre,
      date,
      location,
      minPrice,
      maxPrice,
      performer,
      audienceType,
      eventType,
    });
  }, [genre, date, location, minPrice, maxPrice, performer, audienceType, eventType]);
console.log(genre);
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      {/* genre Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">All Categories</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="tech">Tech</option>
          <option value="comedy">Comedy</option>
          <option value="education">Education</option>
        </select>
      </div>

      {/* Date Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Date</label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Location</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Price Range</label>
        <div className="flex justify-between">
          <input type="number" className="w-1/2 p-2 border border-gray-300 rounded-lg" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <span className="mx-2">-</span>
          <input type="number" className="w-1/2 p-2 border border-gray-300 rounded-lg" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
      </div>

      {/* Performer Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Performer</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter performer's name" value={performer} onChange={(e) => setPerformer(e.target.value)} />
      </div>

      {/* Audience Type Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Audience Type</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={audienceType} onChange={(e) => setAudienceType(e.target.value)}>
          <option value="">Select Audience</option>
          <option value="child">Child</option>
          <option value="teen">Teen</option>
          <option value="adult">Adult</option>
        </select>
      </div>

      {/* Event Type Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Event Type</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">All Types</option>
          <option value="virtual">Virtual</option>
          {/* <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option> */}
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
