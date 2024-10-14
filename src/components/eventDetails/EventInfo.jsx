import React, { useState, useEffect } from "react";
import EventInfoSection from "./EventInfoSection";
import axios from "axios";

const EventInfo = ({ event }) => {
  const [selectedSection, setSelectedSection] = useState("Guests");
  const [description, setDescription] = useState(event.description);
  const [performers, setPerformers] = useState([]);

  const sections = {
    Guests: performers,
    Location: "Event is located at 1234 Event St, Event City.",
    Images: "Images related to the event will be displayed here.",
    // Synopsis: "A brief overview of the event goes here.",
    MoreInfo: description,
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  // Function to fetch performer details by ID
  const fetchPerformerDetails = async (performerIds) => {
    const promises = performerIds.map((id) => axios.get(`http://localhost:8000/api/user/getUserById/${id}`));
    try {
      const responses = await Promise.all(promises);
      const fetchedPerformers = responses.map((res) => res.data.data); // Adjust based on your API response structure
      setPerformers(fetchedPerformers);
    } catch (error) {
      console.error("Error fetching performer details:", error);
    }
  };

  // Fetch performer details when the event prop changes
  useEffect(() => {
    if (event.performers && event.performers.length > 0) {
      fetchPerformerDetails(event.performers);
    }
  }, [event.performers]);

  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="flex overflow-scroll">
        {Object.keys(sections).map((section) => (
          <button key={section} onClick={() => handleSectionChange(section)} className={`m-2 px-4 py-2 text-lg ${section === selectedSection ? "text-primary" : "text-gray-600"}`}>
            {section}
          </button>
        ))}
      </div>

      <div className="border-gray-300 rounded-lg">
        {selectedSection === "Guests" ? (
          <div className="p-4">
            {/* <h3 className="text-lg font-bold">Performers:</h3> */}
            <ul>
              {performers.map((performer) => (
                <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-3 md:p-5 mb-4">
                  <li key={performer._id} className="py-2">
                    <h4 className="font-semibold">{performer.name}</h4>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <EventInfoSection section={sections[selectedSection]} />
        )}
      </div>
    </div>
  );
};

export default EventInfo;
