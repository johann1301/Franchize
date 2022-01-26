import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function PostCard() {

  const storedToken = localStorage.getItem('authToken')

  const [user, setUser] = useState([])

  

	const getUser = () => {
		// request all the posts from the server
		axios.get('/user' , { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				setUser(response.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getUser()
	}, [])
   
    

return (
    <>
       <div className='post-container' key={user._id}>     
    <h3 >{user.name}</h3>
	<h5 className='post-description'>{user.lastName}</h5>
	</div>
    </>
)
}