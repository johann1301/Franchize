import React from 'react'
import { Link } from 'react-router-dom'
import 'boxicons'


export default function Navbar() {

	return (
	<div className = "navbar">


        <Link to={'/'}>
          <box-icon type='solid' name='leaf'></box-icon>
          Company Name
        </Link>

        <div >

        <Link className = "pages" to={'/'}>
			Home 
        </Link>

        <Link className = "pages" to={'/firstPage'}>
			1 Page 
        </Link>

        <Link className = "pages" to={'/secondPage'}>
			2 Page
        </Link>

        <Link className = "pages"  to={'/thirdPage'}>
			3 Page
        </Link>

        </div>

        <Link to={'/login'}>
			Login/Signup
        </Link>

    </div>

)}