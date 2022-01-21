import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)

	const navigate = useNavigate()

	const { loginUser } = useContext(AuthContext)

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }

		axios.post('/auth/login', requestBody)
			.then(response => {
				// redirect -> Events
				// navigate('/login')

				const token = response.data.authToken
				// call login user function from auth context
				loginUser(token)
				navigate('/')
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
			<Link className='link-btn' to={'/login'}> Login </Link>
            <Link className='link-btn-chosen' to={'/signup'}> Signup </Link>
		</div>

        <div className='form-align' >
            <form className='login-form' onSubmit={handleSubmit}>
            <input className="formInput" type="text" name="email" value={email} onChange={handleEmail} placeholder='Email' />
            <input className="formInput" type="password" value={password} onChange={handlePassword} placeholder='Password' />
            <button className='details-btn' type="submit">Login</button>
            </form>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        </div>
		
		</>
	
	
	)
}


