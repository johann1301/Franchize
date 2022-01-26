import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'boxicons'
import logo from '../Images/clever-fit_Logo.png'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'


export default function Navbar() {

   const [open, setOpen] = useState(false)

   const {isLoggedIn, logoutUser} = useContext(AuthContext)
 

	return (
  
	<div className = "navbar">


      
      
        <div className='menu' >
        <box-icon name='menu' color='#ffffff' onClick={() => setOpen(!open)}  ></box-icon>
        { open &&
        <>
        <div className='dropdown'>
        <Link onClick={() => setOpen(!open)} className = "pages" to={'/'}>
			Home 
        </Link>

        <Link onClick={() => setOpen(!open)} className = "pages" to={'/profile'}>
			Profile 
        </Link>

        <Link onClick={() => setOpen(!open)} className = "pages" to={'/secondPage'}>
			2 Page
        </Link>

        <Link onClick={() => setOpen(!open)} className = "pages"  to={'/thirdPage'}>
			3 Page
        </Link> 
        </div> 
        </>}
        </div>

        <Link to={'/'}>
          
        <img src={logo} alt='Logo' className='logo' /> 

      </Link>

        {isLoggedIn ?(
    <>

      <Link onClick={logoutUser} to={'/login'}>
        <box-icon name='log-out' color='#ffffff' ></box-icon>
      </Link>
    
	  </>

):(
    <>
    
      <Link to={'/login'}>
        <box-icon name='log-in' color='#ffffff' ></box-icon>
      </Link>

    </>
)}
       

  </div>
  

)}