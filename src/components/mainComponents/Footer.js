import React from 'react';
import { ShoppingBag, Share2, Send, Youtube, Facebook, Instagram } from 'react-feather';
import '../styles/footer.scss';
import '../styles/test.css';
import { Link, useNavigate } from "react-router-dom";
function Footer() {
  const navigate=useNavigate();
  const handleClick = () =>{
    navigate('/login');
  }
 return (
   <footer className="footer">
     <div className="footer__parralax">
       <div className="footer__parralax-trees"></div>
       <div className="footer__parralax-moto"></div>
       <div className="footer__parralax-secondplan"></div>
       <div className="footer__parralax-premierplan"></div>
       <div className="footer__parralax-voiture"></div>
     </div>
    <div className="container">
      <div className="footerFlexContainer">
        <div className="firstFooterColumn"> <h3 className="footer__col-title">
             <span>DriveEpic</span>
           </h3><nav className="footer__nav">
             <ul className="footer__nav-list">
               <li className="footer__nav-item">
                 Unparalleled after-sales services
               </li>
               <li className="footer__nav-item">
                 Security and trust associated with us
               </li>
             </ul>
           </nav></div>
      <div className="secondFooterColumn"> <h3 className="footer__col-title">
             <Share2 /> <span>Social Media</span>
           </h3>
           <div className='footer__socialmedia'>
           <svg className='footer_svg'  xmlns="http://www.w3.org/2000/svg" width="42" height="46" viewBox="0 0 42 46" fill="none">
                <ellipse cx="20.641" cy="23" rx="20.641" ry="23" fill="white"/>
                <path d="M22.5 0C10.0734 0 0 10.2973 0 23C0 35.7027 10.0734 46 22.5 46C34.9266 46 45 35.7027 45 23C45 10.2973 34.9266 0 22.5 0ZM27.8297 15.894H24.4477C24.0469 15.894 23.6016 16.433 23.6016 17.1494V19.6458H27.832L27.1922 23.206H23.6016V33.8939H19.6102V23.206H15.9891V19.6458H19.6102V17.5519C19.6102 14.5475 21.6492 12.1061 24.4477 12.1061H27.8297V15.894Z" fill="#C92424"/>
         </svg>
           <svg  className='footer_svg' xmlns="http://www.w3.org/2000/svg" width="42" height="46" viewBox="0 0 42 46" fill="none">
                <ellipse cx="20.641" cy="23" rx="20.641" ry="23" fill="white"/>
                <path d="M20.641 0C9.24116 0 0 10.2973 0 23C0 35.7027 9.24116 46 20.641 46C32.0409 46 41.2821 35.7027 41.2821 23C41.2821 10.2973 32.0409 0 20.641 0ZM15.5883 32.533H11.4085V17.5447H15.5883V32.533ZM13.4726 15.7047C12.1524 15.7047 11.2988 14.6625 11.2988 13.3735C11.2988 12.0582 12.1782 11.0472 13.5263 11.0472C14.8744 11.0472 15.7001 12.0582 15.7259 13.3735C15.7259 14.6625 14.8744 15.7047 13.4726 15.7047ZM30.854 32.533H26.6742V24.2267C26.6742 22.2932 26.0679 20.9803 24.5564 20.9803C23.4018 20.9803 22.7159 21.8692 22.4127 22.7245C22.3009 23.0288 22.273 23.46 22.273 23.8889V32.5306H18.091V22.3244C18.091 20.4532 18.0372 18.8888 17.9813 17.5423H21.6129L21.8042 19.6243H21.8881C22.4385 18.6468 23.7866 17.2045 26.0421 17.2045C28.7921 17.2045 30.854 19.2577 30.854 23.6708V32.533Z" fill="#C92424"/>
         </svg>
           </div>
           </div>
      <div className="thirdFooterColumn"> <ul className="footer__nav-list">
               <li className="footer__nav-item">
                <div className='footer-buttons'><button className='Footer-login' onClick={handleClick}>Login</button>
                <button className='Footer-register' onClick={handleClick}>Register</button></div>
               </li>
             </ul></div>
    </div>
    </div>
    <div className="footer__copyrights">
         <p>Realesed by @DriveEpic</p>
       </div>
    
      
    
    
    
    </footer>
 );
}

export default Footer;
