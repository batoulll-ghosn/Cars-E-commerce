import React, { useState } from 'react'
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked)

    }

  return (
    <div>
      <nav className="Navbar">
        <a className='N-logo' href="/">DriveEpic</a>
      <div>
        <ul id='N-menu' className={clicked ? "#N-menu active" : "#N-menu"} >
            <li className='N-menu-items'>
                <Link className='N-menu-tag active' to="/">Home
                </Link>
                </li>
            <li className='N-menu-items'>
                <Link className='N-menu-tag' to="/about">About us
                </Link>
                </li>
            <li className='N-menu-items'>
                <Link className='N-menu-tag' to="/cars">Cars
                </Link>
                </li>
            <li className='N-menu-items'>
                <Link className='N-menu-tag' to="contactUs">Contact us
                </Link>
                </li>
                <li className='N-menu-button'>
                <Link className='N-register' to="/login">Order Now
                </Link>
                </li>

        </ul>
      </div>

      <div id='N-mobile' onClick={handleClick}>
        <i id='bar' className=
        {clicked
             ? 'fas fa-times' : 'fas fa-bars'}
             ></i>

      </div>
      </nav>
    </div>
  )
}

export default NavBar
