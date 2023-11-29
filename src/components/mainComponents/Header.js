import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <div className='Header'>  
      <div className='h-main-title'>
      <p className='h-title'>
        PURCHASE YOUR   
      </p>
      <p className='h-perfect'>PERFECT</p>
      <p className='h-title'>CAR</p>
      </div>
      <div className='h-description'>
      Over 1000+ New Cars  Available Here
      </div>
      <div className='h-buttons'>
        <button className='h-exploremore-btn'>Explore More</button>
        <button className='h-register-btn'>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Header
