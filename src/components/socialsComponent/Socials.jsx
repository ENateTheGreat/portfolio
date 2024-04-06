import React from 'react'
import './socials.css'

function Socials() {
    return (
        <div className='socials-wrapper'>
            <div className="footer-wrapper">
                <img src={require("./svgs/linkedin.png")} alt="linkedin logo" className="linkedin" id='contact-icon'/>
                <img src={require("./svgs/facebook.png")} alt="facebook logo" className="facebook" id='contact-icon'/>
                <img src={require("./svgs/instagram.png")} alt="instagram logo" className="instagram" id='contact-icon'/>
                <img src={require("./svgs/email.png")} alt="email logo" className="email" id='contact-icon'/>
                <img src={require("./svgs/phone.png")} alt="phone logo" className="phone" id='contact-icon'/>
            </div>
        </div>
    )
}

export default Socials
