import { useState } from 'react';
import Eventcard from './EventCard';
import FilterSidebar from './FilterSidebar';
import { events } from '../../data/events';

const EventSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (filters) => {
    // Filtering logic based on filters
    const filtered = events.filter((event) => {
      // Apply filter logic
      return (
        (!filters.location || event.location.includes(filters.location)) &&
        (!filters.category || event.category === filters.category) &&
        (!filters.genre || event.genre === filters.genre)
        // Add other filter conditions here...
      );
    });
    setFilteredEvents(filtered);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className='flex flex-col lg:flex-row p-5'>
      {/* Sidebar */}
      <div className='w-full lg:w-1/4 lg:sticky lg:top-0 lg:h-screen mb-5 lg:mb-0 lg:mr-5'>
        <FilterSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* Event Cards */}
      <div className='w-full lg:w-3/4'>
        {/* Search Bar */}
        <div className='sticky top-0 z-10 bg-white px-5 py-5 shadow-md w-full'>
          <div className=' flex gap-5'>
            <input
              type='text'
              placeholder='Search events...'
              value={searchQuery}
              onChange={handleSearch}
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-primary text-white px-4 py-2 rounded-md'>
              Search
            </button>
          </div>
        </div>

        {/* Event Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-3'>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <Eventcard event={event} key={event._id} />)
          ) : (
            <p className='col-span-full text-center text-gray-500'>
              No events found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
