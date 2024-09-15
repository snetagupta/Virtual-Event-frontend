import React from 'react'
import EventHeader from '../components/eventDetails/EventHeader'
import EventActions from '../components/eventDetails/EventActions'
import EventInfo from '../components/eventDetails/EventInfo'

const EventDetails = () => {
  return (
    <div>
        <EventHeader/>
        <EventActions/>
        <EventInfo/>
    </div>
  )
}

export default EventDetails