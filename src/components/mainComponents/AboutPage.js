
import NaBar from './NavBar'; 
import Footer from './Footer'; 
import '../styles/aboutPage.css';
import img from'./contactus1.jpg';
 export default function aboutPage(){
    return (
        <>
        <NaBar/>
        <div className='about-p-c'>
        <h1>ABOUT US</h1>
        <div className='about-p-c-first'>
            <p>At DriveEpic, our mission is to revolutionize the car-buying experience by providing a seamless online platform that connects passionate drivers with their dream vehicles, all while ensuring transparency and customer satisfaction.</p>
            <img src={img} className='about-p-c-img'/>
        </div>
        <div className='about-p-c-second'>
        <img src={img} className='about-p-c-img'/>
        <p>At DriveEpic, customer satisfaction is at the heart of everything we do. Our dedicated team is committed to providing an exceptional buying experience, from browsing our inventory to driving off in your newly purchased vehicle.</p>
        </div>
        </div>
        <Footer/>
        </>
    );
}