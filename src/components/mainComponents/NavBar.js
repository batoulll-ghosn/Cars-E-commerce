import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const navigate=useNavigate();
    const [clicked, setclicked] = useState(false);
    const handleClick = () => {
        setclicked(!clicked)

    }
 const logout = ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("id")
 }
 localStorage.setItem('id','657c278d03ad3b9ded4dae28');
 const handleLocalStorage=()=>{
   let updatedId=localStorage.getItem('id')+',657c3125d1441942133457c1';
   localStorage.setItem('id',updatedId);
  //  let storageData=localStorage.getItem('id').split(',');
  //  if(storageData.includes('123'))console.log(false);
  // storageData.push('123455555');
  // localStorage.setItem('id',storageData);
  // console.log('hello',localStorage.getItem('id'));
  // console.log('hello',localStorage.getItem('id'));
  navigate('/cart');
 }
 console.log(localStorage.getItem('id'));
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
                <a className='N-register' href="#" onClick={handleLocalStorage}>Order Now
                </a>
               {/* 657c278d03ad3b9ded4dae28 */}
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
