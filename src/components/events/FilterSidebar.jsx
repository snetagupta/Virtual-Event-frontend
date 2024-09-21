const FilterSidebar = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      {/* Category Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Category</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
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
        <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Location</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter location" />
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Price Range</label>
        <div className="flex justify-between">
          <input
            type="number"
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
            placeholder="Min Price"
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
            placeholder="Max Price"
          />
        </div>
      </div>

      {/* Performer Search */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Search by Performer</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter performer's name"
        />
      </div>

      {/* Audience Type Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Audience Type</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option value="">Select Audience</option>
          <option value="child">Child</option>
          <option value="teen">Teen</option>
          <option value="adult">Adult</option>
        </select>
      </div>

      {/* Event Type Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Event Type</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option value="">All Types</option>
          <option value="virtual">Virtual</option>
          <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      {/* Popularity Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Popularity</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option value="">All</option>
          <option value="popular">Most Popular</option>
          <option value="new">New Arrivals</option>
        </select>
      </div>

      {/* Ticket Availability Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Ticket Availability</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option value="">Any</option>
          <option value="available">Available</option>
          <option value="soldout">Sold Out</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
