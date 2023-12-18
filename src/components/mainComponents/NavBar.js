import React, { useState } from 'react'
import '../styles/NavBar.css';

const NavBar = () => {
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked)

    }
 const logout = ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("id")
 }
  return (
    <div>
      <nav className="Navbar">
        <a className='N-logo' href="index.html">DriveEpic</a>
      <div>
        <ul id='N-menu' className={clicked ? "#N-menu active" : "#N-menu"} >
            <li className='N-menu-items'>
                <a className='N-menu-tag active' href="#">Home
                </a>
                </li>
            <li className='N-menu-items'>
                <a className='N-menu-tag' href="#">About us
                </a>
                </li>
            <li className='N-menu-items'>
                <a className='N-menu-tag' href="#">Cars
                </a>
                </li>
            <li className='N-menu-items'>
                <a className='N-menu-tag' href="#">Contact us
                </a>
                </li>
                <li className='N-menu-button'>
                  
                <a className='N-register' href="#" >Order Now
                </a>
               
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
