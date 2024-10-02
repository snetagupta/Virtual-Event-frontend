import React, { useState } from 'react';

const Step1 = ({ formData, handleInputChange, onNext }) => {
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      handleInputChange({ target: { name: 'image', value: file } });
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-6 p-8 bg-white  rounded-lg transition-all transform duration-500 ease-in-out">
      {/* Image Upload Section */}
      <div className="mb-6">
        <label className="block text-lg font-semibold">Upload an image for the event:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Event"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        )}
      </div>

      {/* Event Title */}
      <div>
        <label className="block text-lg font-semibold">What is the title of the event?</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border-b-2 p-2 focus:outline-none focus:border-primary"
          placeholder="Event Title"
        />
      </div>

      {/* Event Description */}
      <div>
        <label className="block text-lg font-semibold">How would you describe the event?</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border-b-2 p-2 focus:outline-none focus:border-primary"
          placeholder="Event Description"
        />
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-lg font-semibold">When is the event?</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full border-b-2 p-2 focus:outline-none focus:border-primary"
        />
      </div>
    </div>
  );
};

export default Step1;
