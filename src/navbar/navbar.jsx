import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className='mainnav'>
            
            <div className='main-heding'>
              <h1>Coffee Stories</h1>
            </div>
      
          <div className='nav-links'> 
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Location">Menu</Link>
            <Link to="/Login">Login</Link>
          </div>
             
          </div>
    </div>
  )
}

export default Navbar
