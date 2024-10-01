import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const locations = [
  { value: 'new-york', label: 'New York' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'london', label: 'London' },
  { value: 'tokyo', label: 'Tokyo' },
];

const genres = [
  { value: 'music', label: 'Music' },
  { value: 'art', label: 'Art' },
  { value: 'technology', label: 'Technology' },
  { value: 'business', label: 'Business' },
  { value: 'sports', label: 'Sports' },
];

// Helper function to get the current time in 12-hour format with AM/PM
const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const Step2 = ({ formData, handleInputChange }) => {
  const [time, setTime] = useState(formData.time || getCurrentTime()); // Set default to current time
  
  // Update formData when time changes
  const handleTimeChange = (value) => {
    setTime(value);
    handleInputChange({ target: { name: 'time', value } });
  };

  const handleLocationChange = (selectedOption) => {
    handleInputChange({ target: { name: 'location', value: selectedOption.value } });
  };

  const handleGenreChange = (selectedOption) => {
    handleInputChange({ target: { name: 'genre', value: selectedOption.value } });
  };

  return (
    <div className="space-y-8 p-8 bg-white rounded-lg transition-all duration-500 ease-in-out transform">
      {/* Event Time (Using react-time-picker with AM/PM) */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          What time will the event start?
        </label>
        <TimePicker
          onChange={handleTimeChange}
          value={time}
          format="h:mm a" // 12-hour format with AM/PM
          disableClock // Disable the clock icon
          className="w-full p-2 bg-transparent focus:outline-none focus:border-primary transition-colors duration-300 ease-in-out"
        />
      </div>

      {/* Event Location (Searchable Dropdown) */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          Where is the event located?
        </label>
        <Select
          value={locations.find(option => option.value === formData.location)}
          onChange={handleLocationChange}
          options={locations}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select Event Location"
        />
      </div>

      {/* Event Genre (Searchable Dropdown) */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          What genre best describes the event?
        </label>
        <Select
          value={genres.find(option => option.value === formData.genre)}
          onChange={handleGenreChange}
          options={genres}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select Event Genre"
        />
      </div>
    </div>
  );
};

export default Step2;
