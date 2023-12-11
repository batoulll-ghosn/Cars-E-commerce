import NavBar from "./NavBar"
import '../styles/contact.css';
import { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';
export default function ContactPage(){
    const form = useRef();
    const [unset,setUnset]=useState(false);
    const [error,setError]=useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');
    if (!userName || !userEmail || !message) {
        setError('Please fill in all fields');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        setError('Please enter a valid email address');
        return;
    }
        emailjs.sendForm('service_l9whsg7', 'template_ac975a9', form.current, 'IhNna7eaQ3PnOGCYp')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <>
        <NavBar/>
        <div className={`contact-container ${unset&&`unset-container`}`}>
            <div className='contact-container-d'>
                <h1>CONTACT Us</h1>
                {error&&<span>{error}</span>}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Name" onFocus={()=>setUnset(true)} onBlur={()=>setUnset(false)}/>
                    <input type="text" name="user_email" placeholder="Email" onFocus={()=>setUnset(true)} onBlur={()=>setUnset(false)}/>
                    <textarea placeholder="Message" name="message" onFocus={()=>setUnset(true)} onBlur={()=>setUnset(false)}></textarea>
                    <button >Submit</button>
                </form>
            </div>
        </div>
        </>
        
    )
};