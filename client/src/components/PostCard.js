import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PostCard(props) {


  const [posts, setPosts] = useState([])

	const getAllPosts = () => {
		// request all the posts from the server
		axios.get('/posts')
			.then(response => {
				setPosts(response.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllPosts()
	}, [])

	if (posts.length === 0) {
		return <></>
	}
   
    let list = posts.map ( post =>{
  
      return (
          
    <h3 to={`/posts/${post._id}`} key={post._id}>{post.title}</h3>
  
      )
  })

return (
    <>
        {list}
    </>
)
}