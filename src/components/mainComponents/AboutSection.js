import '../styles/about.css'
function About() {
  return (
    <div className="Abouts">
     <div className="as-leftSide"><img src="./images/contactus1.jpg" className="as-imageOfAbout"/></div>
     <div className="as-rightSide"><h1 className="as-title">ABOUT US</h1>
     <p className="as-text">At DriveEpic, our mission is to revolutionize the car-buying experience to provide a seamless online platform that connects passionate drivers with their dream vehicles, all while ensuring transparency and customer satisfaction.At DriveEpic, our mission is to revolutionize the car-buying experience to provide a seamless online platform that connects passionate drivers with their dream vehicles, all while ensuring transparency and customer satisfaction.</p>
     <button className="as-button" to="/about">Read More</button></div>
    </div>
  );
}

export default About;