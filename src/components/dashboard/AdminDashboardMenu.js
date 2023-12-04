import React, { useState } from 'react'
import '../styles/NavBar.css';
import { Link, useNavigate } from "react-router-dom";
const AdminDashboardMenu = () => {
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked)

    }

  return (
    <div>
      <nav className="Navbar">
        <Link className='N-logo' to='/'>DriveEpic</Link>
      <div>
        <ul id='N-menu' className={clicked ? "#N-menu active" : "#N-menu"} >
            <li className='N-menu-items'>
             <h1 className='Mn-admin'>Hello Super Admin</h1>   
            </li>
            
                <li className='N-menu-button'>
                <button className='N-register' >Sign Out
                </button>
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

export default AdminDashboardMenu;
