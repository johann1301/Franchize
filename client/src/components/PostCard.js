import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
     
	 <div className='post-container' key={post._id}>     
    <h3 >{post.title}</h3>
	<h5 className='post-description'>{post.description}</h5>
	</div>
    
      )
  })

return (
    <>
        {list}
    </>
)
}