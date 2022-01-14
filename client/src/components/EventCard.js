import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function EventCard(props) {


  const [events, setEvents] = useState([])

	const getAllEvents = () => {
		// request all the events from the server
		axios.get('/api/events')
			.then(response => {
				console.log(response)
				setEvents(response.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllEvents()
	}, [])

	if (events.length === 0) {
		return <></>
	}
   
    let list = events.map ( event =>{
  
      return (
          
    <h1 key={event._id}>{event.title}</h1>
  
      )
  })

return (
    <>
        {list}
    </>
)
}