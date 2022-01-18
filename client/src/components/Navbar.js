import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'boxicons'
import logo from '../Images/clever-fit_Logo.png'


export default function Navbar() {

   const [open, setOpen] = useState(false)
 
	return (
  
	<div className = "navbar">


      <Link to={'/'}>
          
        <img src={logo} alt='Logo' className='logo' /> 

      </Link>
      
        <div className='menu' >
        <box-icon name='menu' color='#ffffff' onClick={() => setOpen(!open)}  ></box-icon>
        { open &&
        <>
        <div className='dropdown'>
        <Link onClick={() => setOpen(!open)} className = "pages" to={'/'}>
			Home 
        </Link>

        <Link onClick={() => setOpen(!open)} className = "pages" to={'/firstPage'}>
			1 Page 
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

        <Link to={'/login'}>
        <box-icon name='log-in' color='#ffffff' ></box-icon>
        </Link>

  </div>
  

)}