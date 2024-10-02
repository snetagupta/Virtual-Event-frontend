import React, { useEffect, useState } from 'react';
import EventHeader from '../components/eventDetails/EventHeader';
import EventActions from '../components/eventDetails/EventActions';
import EventInfo from '../components/eventDetails/EventInfo';
import Navbar from '../components/common/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id)

  const getEventDetails = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/event/${id}`);
      setEvent(data.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventDetails();
    console.log(event);
  }, [id]);
  return (
    <>
      <Navbar />
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400'></div>
        </div>
      ) : (
        <div>
          <EventHeader event={event} />
          <EventActions event={event}/>
          <hr className='mt-3' />
          <EventInfo event={event}/>
        </div>
      )}
    </>
  );
};

export default EventDetails;
