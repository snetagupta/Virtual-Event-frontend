import React from 'react';
import Select from 'react-select';

// Generate duration options (1 to 10 hours)
const durationOptions = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1} ${i + 1 === 1 ? 'hour' : 'hours'}`
}));

const Step3 = ({ formData, handleInputChange }) => {
  // Handle react-select changes
  const handleSelectChange = (selectedOption, fieldName) => {
    handleInputChange({ target: { name: fieldName, value: selectedOption.value } });
  };

  return (
    <div className="space-y-8 p-8 bg-white rounded-lg transition-all duration-500 ease-in-out transform">
      {/* Event Price */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          What is the price for the event?
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full border-b-2 p-2 focus:outline-none focus:border-primary"
          placeholder="Event Price"
          min="0"
          step="0.01"
        />
      </div>

      {/* Event Link */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          Is there a link to the event?
        </label>
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          className="w-full border-b-2 p-2 focus:outline-none focus:border-primary"
          placeholder="Event Link"
        />
      </div>

      {/* Event Duration (Dropdown between 1 and 10 hours using react-select) */}
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-700">
          How long will the event last?
        </label>
        <Select
          value={durationOptions.find(option => option.value === formData.duration)}
          onChange={(selectedOption) => handleSelectChange(selectedOption, 'duration')}
          options={durationOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select Event Duration"
        />
      </div>
    </div>
  );
};

export default Step3;
