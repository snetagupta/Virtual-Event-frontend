import { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [locationType, setLocationType] = useState('online');
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [genre, setGenre] = useState('');

  const locations = [
    'Youtube',
    'Mumbai Art Gallery',
    'Goa Beach',
    'Bangalore Tech Park',
    'Delhi Food Court',
    'Rishikesh',
    'Shimla Hills',
    'Chennai Auditorium',
    'Kolkata Book Hub',
    'Hyderabad IT Hub',
  ];

  const genres = [
    'Comedy',
    'Music',
    'Tech',
    'Food',
    'Yoga',
    'Photography',
    'Dance',
    'Books',
    'Coding',
  ];

  const handleFilterChange = () => {
    onFilterChange({
      locationType,
      location,
      fromDate,
      toDate,
      minPrice,
      maxPrice,
      time,
      category,
      genre,
    });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      {/* Location Type */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Location Type</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={locationType}
          onChange={(e) => {
            setLocationType(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Location</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Type location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            handleFilterChange();
          }}
          list="locations"
        />
        <datalist id="locations">
          {locations.map((loc, index) => (
            <option key={index} value={loc} />
          ))}
        </datalist>
      </div>

      {/* Date Range */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Date Range</label>
        <div className="flex justify-between">
          <input
            type="date"
            className="w-[48%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={fromDate}
            onChange={(e) => {
              setFromDate(e.target.value);
              handleFilterChange();
            }}
          />
          <input
            type="date"
            className="w-[48%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={toDate}
            onChange={(e) => {
              setToDate(e.target.value);
              handleFilterChange();
            }}
          />
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Price Range</label>
        <div className="flex justify-between">
          <input
            type="number"
            className="w-[48%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
              handleFilterChange();
            }}
          />
          <input
            type="number"
            className="w-[48%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              handleFilterChange();
            }}
          />
        </div>
      </div>

      {/* Time */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Time</label>
        <input
          type="time"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Category</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select category</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="Tech">Tech</option>
          <option value="Food">Food</option>
          <option value="Yoga">Yoga</option>
          <option value="Photography">Photography</option>
          <option value="Dance">Dance</option>
          <option value="Books">Books</option>
          <option value="Coding">Coding</option>
        </select>
      </div>

      {/* Genre */}
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-700">Genre</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select genre</option>
          {genres.map((gen, index) => (
            <option key={index} value={gen}>
              {gen}
            </option>
          ))}
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        className="w-full bg-primary hover:bg-orange-600 text-white font-semibold p-2 rounded-md transition-colors"
        onClick={handleFilterChange}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
