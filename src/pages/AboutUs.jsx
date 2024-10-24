import React from 'react'
import Navbar from '../components/common/Navbar'
import Ticket from '../components/Ticket'
import CreateEvent from '../components/forms/CreateEvent'

const AboutUs = () => {
  return (
      <div>
          <Navbar />
          <CreateEvent/>
          <Ticket/>
          
    </div>
  )
}

export default AboutUs