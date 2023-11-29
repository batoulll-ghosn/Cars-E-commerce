import React from 'react';
import '../styles/Header.css'
import NavBar from './NavBar';

const Header = () => {
  return (
    <div>
      <NavBar/>
      <div className='Header'>  
        <button className='h-exploremore-btn'>Explore More</button>
        <button className='h-register-btn'>Register</button>
        </div>
    </div>
  )
}

export default Header
