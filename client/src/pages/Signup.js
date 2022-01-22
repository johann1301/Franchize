import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [name, setName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
    const handleLastName = e => setLastName(e.target.value)

    const handleSubmit = e => {
		e.preventDefault()
    
		const requestBody = { email , password, name, lastName }
       
		axios.post('/auth/signup', requestBody)
			.then(response => {
				// redirect -> login 
				navigate('/login')
			})
			.catch(err => {
				const errorDescrition = err.response.data.message
				setErrorMessage(errorDescrition)
			})
	}

	return (
		<>
        <div className='login-align'>
		<div className='login-signup-btn'>
			<Link className='link-btn-chosen' to={'/login'}> Login </Link>
            <Link className='link-btn' to={'/signup'}> Signup </Link>
		</div>

        <div className='form-align' onSubmit={handleSubmit} >
            <form className='login-form'>
              <input className="formInput" type="text" name="name" value={lastName} onChange={handleLastName} placeholder='Name' />
              <input className="formInput" type="text" name="lastName" value={name} onChange={handleName} placeholder='Last Name' />
              <input className="formInput" type="text" name="email" value={email} onChange={handleEmail} placeholder='Email' />
              <input className="formInput" type="password" name="password" value={password} onChange={handlePassword} placeholder='Password' />
              <button className='details-btn' type="submit">Signup</button>
            </form>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        </div>

		
		</>
	
	
	)
}