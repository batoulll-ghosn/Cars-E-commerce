import '../styles/about.css'
import {Link} from 'react-router-dom';
function About() {
  return (
    <div className="about-container">
    <div>
    <div className="Abouts">
     <div className="as-leftSide"><img src="./images/contactus1.jpg" className="as-imageOfAbout"/></div>
     <div className="as-rightSide"><h1 className="as-title">ABOUT US</h1>
     <p className="as-text">
      At DriveEpic, our mission is to revolutionize the car-buying experience to provide a seamless online platform that connects passionate drivers with their dream vehicles, all while ensuring transparency and customer satisfaction.
     </p>
     <Link to='/about'> <button className="as-button" to="/about">Read More</button> </Link>
     </div>
     </div>
    </div>
    </div>
   
  );
}

export default About;