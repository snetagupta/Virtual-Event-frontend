import React from 'react';
import Select from 'react-select';

// Options for language, age restriction, and available seats
const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'mandarin', label: 'Mandarin' },
  // Add more languages as needed
];

const ageRestrictionOptions = [
  { value: 'all', label: 'All Ages' },
  { value: 'teens', label: 'Teens (13-19)' },
  { value: 'adults', label: 'Adults (18+)' },
  { value: 'kids', label: 'Kids (Under 12)' },
  // Add more options if necessary
];

const availableSeatsOptions = [
  { value: 25, label: '25 seats' },
  { value: 50, label: '50 seats' },
  { value: 75, label: '75 seats' },
  { value: 100, label: '100 seats' },
];

const Step4 = ({ formData, handleInputChange }) => {
  // Handle react-select dropdown changes
  const handleSelectChange = (selectedOption, fieldName) => {
    handleInputChange({ target: { name: fieldName, value: selectedOption.value } });
  };

  return (
    <div className="space-y-8 p-8 bg-white rounded-lg transition-all duration-500 ease-in-out transform">
      {/* Language Dropdown */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          What language will the event be in?
        </label>
        <Select
          value={languageOptions.find(option => option.value === formData.language)}
          onChange={(selectedOption) => handleSelectChange(selectedOption, 'language')}
          options={languageOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select Event Language"
        />
      </div>

      {/* Age Restriction Dropdown */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          Are there any age restrictions?
        </label>
        <Select
          value={ageRestrictionOptions.find(option => option.value === formData.ageRestriction)}
          onChange={(selectedOption) => handleSelectChange(selectedOption, 'ageRestriction')}
          options={ageRestrictionOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select Age Restriction"
        />
      </div>

      {/* Available Seats Dropdown */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          How many seats are available?
        </label>
        <Select
          value={availableSeatsOptions.find(option => option.value === formData.availableSeats)}
          onChange={(selectedOption) => handleSelectChange(selectedOption, 'availableSeats')}
          options={availableSeatsOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select Available Seats"
        />
      </div>
    </div>
  );
};

export default Step4;
