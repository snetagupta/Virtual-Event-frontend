import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Eventcard from "../components/events/EventCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";
const PastEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/event/?pastEvent=true");
      setEvents(response.data.response);
      setFilteredEvents(response.data.response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);


  const onchange = (e) => {
    setSearchQuery(e.target.value);
    const filtered = events.filter((event) => event.title.toLowerCase().includes(e.target.value));
    setFilteredEvents(filtered);
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:p-6 p-3 gap-4 h-screen">
        <div className="md:w-1/3 w-full">
          <SearchBar placeholder="Search events..." onChange={onchange} searchQuery={searchQuery}  />
        </div>
        <div className="grid grid-cols-1  mx-auto  md:grid-cols-3 xl:grid-cols-4 gap-6">{filteredEvents.length > 0 ? filteredEvents.map((event) => <Eventcard event={event} key={event._id} />) : <p className="col-span-full text-center text-gray-500">No events found.</p>}</div>
      </div>
    </div>
  );
};

export default PastEvents;
