import NavBar from "./NavBar"
import '../styles/contact.css';
import { useState } from "react";
export default function ContactPage(){
    const [unset,setUnset]=useState(false);

    return (
        <>
        <NavBar/>
        <div className={`contact-container ${unset&&`unset-container`}`}>
            <div className='contact-container-d'>
                <h1>CONTACT Us</h1>
                <form>
                    <input type="text" placeholder="Name" onFocus={()=>setUnset(true)} onBlur={()=>setUnset(false)}/>
                    <input type="text" placeholder="Email" onFocus={()=>setUnset(true)} onBlur={()=>setUnset(false)}/>
                    <textarea placeholder="Message" onFocus={()=>setUnset(true)} onBlur={()=>setUnset(false)}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </>
        
    )
};