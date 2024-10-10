import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FilterSidebar = ({ onFiltersChange }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  // Capture 'genre' from the query parameter
  const defaultGenre = searchParams.get("genre") || "";

  const [genre, setGenre] = useState(defaultGenre);
  const [date, setDate] = useState("");
  const [locationState, setLocationState] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [performer, setPerformer] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    setGenre(defaultGenre);
  }, [location.search]);

  useEffect(() => {
    if (genre) {
      navigate(`/events?genre=${genre.toLowerCase()}`);
    }
  }, [genre, navigate]);

  useEffect(() => {
    onFiltersChange({
      genre,
      date,
      location: locationState,
      minPrice,
      maxPrice,
      performer,
      audienceType,
      eventType,
    });
  }, [genre, date, locationState, minPrice, maxPrice, performer, audienceType, eventType]);

  console.log("genre is", genre);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      {/* Genre Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">All Categories</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="workshop">Workshop</option>
          <option value="podcast">Podcast</option>
          <option value="education">Education</option>
          <option value="mentalHealth">Mental Health</option>
          <option value="Magic">Magic</option>
          <option value="comedy">Comedy</option>
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
        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter location" value={locationState} onChange={(e) => setLocationState(e.target.value)} />
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
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
