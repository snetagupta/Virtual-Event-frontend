import React from 'react';

const EventHeader = ({event}) => {
  const formatDate = (timestamp) => { 
     
      const dateTime = new Date(timestamp);

      const formattedDate = dateTime.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      const formattedTime = dateTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

    const formattedDateTime = `${formattedDate}`;
    return formattedDateTime;
  }


  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 mx-4 md:mx-16 relative">
      <div className="w-full md:w-[45%] mt-6 md:mb-0">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold">{event.title}</h2>
          <div className="text-md md:text-md font-light text-gray-600 mt-4 md:mt-5 flex gap-2">
            <p className="border px-2 py-1 rounded-lg w-fit">{event.genre}</p>
            <p className="border px-2 py-1 rounded-lg w-fit">{event.language}</p>
            <p className="border px-2 py-1 rounded-lg w-fit">{formatDate(event.date)}</p>
            <p className="border px-2 py-1 rounded-lg w-fit">{(event.ageRestriction)}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[55%] bg-blue-gray-700 h-[200px] md:h-[300px] overflow-hidden rounded-2xl">
        <img src={event.image} alt="Event Poster" className="w-full h-full object-cover" />
      </div>
      <div className="w-full absolute top-2 left-2">
        <p className="px-3 py-1 bg-[#defcd3] text-green-500 text-sm rounded-lg w-fit">{event.availableSeats} Seats Available</p>
      </div>
    </section>
  );
};

export default EventHeader;
