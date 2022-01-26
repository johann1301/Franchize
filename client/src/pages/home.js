import React from 'react'
import PostCard from '../components/PostCard';
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

	const {isLoggedIn} = useContext(AuthContext)

	const navigate = useNavigate()

	console.log(isLoggedIn)

	// useEffect(() => {

	// 	if(isLoggedIn == false){
	// 		navigate('/login')
	// 	} else {

	// 	}

	// })


	return (
		
		<>
		  
		    <div>
			<h1>News </h1>
		    </div>

			<div className='post-align'>
		    <PostCard/>
			</div>
		  
		</>
	)
}