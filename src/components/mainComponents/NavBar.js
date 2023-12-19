import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

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
