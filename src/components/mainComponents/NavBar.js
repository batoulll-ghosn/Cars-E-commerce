import React, { useState } from 'react'
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { getUserRole } from './GetData';

const NavBar = () => {
 
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked)

    }
    const token = localStorage.getItem("token")
 const logout = ()=>{
  localStorage.clear();
  
 }
 
 const role = getUserRole();
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
                <Link className='N-menu-tag' to="/contactUs">Contact us
                </Link>
                </li>
                <li className='N-menu-button'>
                  {token ? 
                  <div className='N-iconss'>
                    {
                      role === 'customer' ? 
                      <>
                    <Link to='/cart'> <img src='/images/cart-large-2-svgrepo-com.svg' className='cart-svg'/> </Link>
                    <Link className='N-registerr' to="/customer"><img src='/images/panel-svgrepo-com.svg' className='panel-icon'/></Link>
                      </>
                      : role === 'seller' ?
                      <Link className='N-registerr' to="/sellerDashboard"><img src='/images/panel-svgrepo-com.svg' className='panel-icon'/></Link>
                      : 
                      <Link className='N-registerr' to="/dashboard"><img src='/images/panel-svgrepo-com.svg' className='panel-icon'/></Link>
                    } 
                    <Link className='N-register' to="/login" onClick={logout}>Logout</Link>
                  </div>
                  
                : 
                <Link className='N-register' to="/login">Login</Link>}
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
