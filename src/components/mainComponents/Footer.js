import React from 'react';
import { ShoppingBag, Share2, Send, Youtube, Facebook, Instagram } from 'react-feather';
import '../styles/footer.scss';

function Footer() {
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
       <div className="footer__columns">
         <div className="footer__col">
           <h3 className="footer__col-title">
             <span>DriveEpic</span>
           </h3>
           <nav className="footer__nav">
             <ul className="footer__nav-list">
               <li className="footer__nav-item">
                 Unparalleled after-sales services
               </li>
               <li className="footer__nav-item">
                 Security and trust associated with us
               </li>
             </ul>
           </nav>
         </div>
         <div className="footer__col">
           <h3 className="footer__col-title">
             <Share2 /> <span>Social Media</span>
           </h3>
           <nav className="footer__nav">
             <ul className="footer__nav-list">
               <li  className="footer__nav-item" >
                <a href="" className="footer__nav-link">
                 
                </a>
               </li>
               <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                
                </a>
               </li>
               <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                 
                </a>
               </li>
             </ul>
           </nav>
         </div>
         <div className="footer__col">
           <h3 className="footer__col-title">
             
           </h3>
           <nav className="footer__nav">
             <ul className="footer__nav-list">
               <li className="footer__nav-item">
                <div className='footer-buttons'><button className='Footer-login'>Login</button>
                <button className='Footer-register'>Register</button></div>
                
               </li>
             </ul>
           </nav>
         </div>
       </div>
       <div className="footer__copyrights">
         <p>Realesed by @DriveEpic</p>
       </div>
     </div>
   </footer>
 );
}

export default Footer;
