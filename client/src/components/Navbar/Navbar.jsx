import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav class="navbar">
      <a href="#" class="logo">Logo</a>

      <ul class="nav-links">
      <li>
      <Link to="/" className='a'>Home</Link>
      </li>
     <li>
     <Link to="/login" className='a'>Login</Link>
    </li>
    <li>
    <Link to="/register" className='a'>Register</Link>
    </li>
    
  </ul>
</nav>
    </>
  )
}

export default Navbar

