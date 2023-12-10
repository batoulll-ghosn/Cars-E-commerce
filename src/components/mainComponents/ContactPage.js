import NavBar from "./NavBar"
import '../styles/contact.css';
export default function ContactPage(){
    return (
        <>
        <NavBar/>
        <div className="contact-container">
            <div className="contact-container-d">
                <h1>CONTACT Us</h1>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </>
        
    )
};