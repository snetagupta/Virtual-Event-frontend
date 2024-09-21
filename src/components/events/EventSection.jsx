import { useState } from 'react';
import Eventcard from './EventCard';
import FilterSidebar from './FilterSidebar';
import { events } from '../../data/events';
import { IoFilter } from 'react-icons/io5';

const EventSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(query)
    );
    setFilteredEvents(filtered);
  };

  return (
    <>
      <div className='flex'>
        {/* Sidebar */}
        <div className='hidden lg:block w-1/4 p-4'>
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className='flex-1 p-4'>
          {/* Search Bar */}
          <div className='flex gap-2 mb-6 items-center'>
          <div className='md:hidden bg-white w-fit h-fit p-1 rounded-lg shadow-lg border border-primary cursor-pointer hover:shadow-2xl hover:bg-primary hover:text-white ease-in-out duration-200'>
          <IoFilter className='text-2xl text-primary hover:text-white' />
        </div>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearch}
              placeholder='Search events...'
              className='w-full p-2 border border-gray-300 rounded-lg'
            />
          </div>

          {/* Event Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Eventcard event={event} key={event._id} />
              ))
            ) : (
              <p className='col-span-full text-center text-gray-500'>
                No events found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSection;
