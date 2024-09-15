import React, { useState } from 'react';
import EventInfoSection from './EventInfoSection';

const EventInfo = () => {
  const [selectedSection, setSelectedSection] = useState('Guests');

  const sections = {
    Guests: 'List of guests attending the event.',
    Location: 'Event is located at 1234 Event St, Event City.',
    Images: 'Images related to the event will be displayed here.',
    Synopsis: 'A brief overview of the event goes here.',
    MoreInfo: 'Additional information and details about the event.'
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className='container mx-auto px-4 py-10'>
      <div className='flex flex-wrap'>
        {Object.keys(sections).map(section => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            className= {`m-2 px-4 py-2 text-lg ${section === selectedSection ? 'text-primary' : 'text-gray-600'}`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className=' border-gray-300 rounded-lg'>
        <EventInfoSection section={sections[selectedSection]} />
      </div>
    </div>
  );
};

export default EventInfo;
