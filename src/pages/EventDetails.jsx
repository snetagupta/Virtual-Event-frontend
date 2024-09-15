import React from 'react'
import EventHeader from '../components/eventDetails/EventHeader'
import EventActions from '../components/eventDetails/EventActions'
import EventInfo from '../components/eventDetails/EventInfo'
import Navbar from '../components/common/Navbar'

const EventDetails = () => {
  return (
   <>
   <Navbar/>
    <div>
        <EventHeader/>
        <EventActions/>
        <hr className='mt-3'/>
        <EventInfo/>
    </div>
   </>
  )
}

export default EventDetails