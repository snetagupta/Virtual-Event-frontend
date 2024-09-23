import React, { useState, useEffect } from "react";
import axios from "axios";

const filterUrl = import.meta.env.VITE_FILTER_URL; // Replace with your backend URL

const FilterSidebar = () => {
  // States for each filter option
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [performer, setPerformer] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [eventType, setEventType] = useState("");

  // Fetch data when any filter changes
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = await axios.get(`${filterUrl}?city=${location}&genre=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&date=${date}`);

        console.log(response.data); // Log the response data
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      }
    };

    fetchFilteredData();
  }, [category, location, minPrice, maxPrice]);
  console.log("date",date);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      {/* Category Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Category</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={category} onChange={(e) => setCategory(e.target.value.toLowerCase())}>
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

      {/* Performer Search */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Search by Performer</label>
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
          <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      {/* Popularity Filter */}
      {/* <div className="mb-4">
        <label className="block mb-2 font-medium">Popularity</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={popularity} onChange={(e) => setPopularity(e.target.value)}>
          <option value="">All</option>
          <option value="popular">Most Popular</option>
          <option value="new">New Arrivals</option>
        </select>
      </div> */}

      {/* Ticket Availability Filter */}
      {/* <div className="mb-4">
        <label className="block mb-2 font-medium">Ticket Availability</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg" value={ticketAvailability} onChange={(e) => setTicketAvailability(e.target.value)}>
          <option value="">Any</option>
          <option value="available">Available</option>
          <option value="soldout">Sold Out</option>
        </select>
      </div> */}
    </div>
  );
};

export default FilterSidebar;
