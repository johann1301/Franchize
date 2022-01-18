import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<>
        <div className='login-align'>
		<div className='login-signup-btn'>
			<Link className='link-btn-chosen' to={'/login'}> Login </Link>
            <Link className='link-btn' to={'/signup'}> Signup </Link>
		</div>

        <div className='form-align' >
            <form className='login-form'>
            <input className="formInput" type="text" name="email" placeholder='Email' />
            <input className="formInput" type="password" placeholder='Password' />
            <button className='details-btn' type="submit">Log in</button>
            </form>
        </div>
        </div>
		
		</>
	
	
	)
}


