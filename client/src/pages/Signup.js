import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<>
        <div className='login-align'>
		<div className='login-signup-btn'>
			<Link className='link-btn' to={'/login'}> Login </Link>
            <Link className='link-btn-chosen' to={'/signup'}> Signup </Link>
		</div>

        <div className='form-align' >
            <form className='login-form'>
              <input className="formInput" type="text" name="name" placeholder='Name' />
              <input className="formInput" type="text" name="lastName" placeholder='Last Name' />
              <input className="formInput" type="text" name="email" placeholder='Email' />
              <input className="formInput" type="password" name="password" placeholder='Password' />
              <button className='details-btn' type="submit">Signup</button>
            </form>
        </div>
        </div>
		
		</>
	
	
	)
}