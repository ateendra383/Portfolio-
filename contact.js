import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import GithubIcon from "../../assets/GithubIcon.png";
import LinkdinIcon from "../../assets/LinkdinIcon.png";
import emailjs from '@emailjs/browser';



const Contact = () =>{
    const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_algknzr', 'template_jrhjxvm', form.current, 'j06k0TBS6rM6hoCXTYZvf')
      .then((result) => {
      console.log('Email sent successfully:', result.text);
         e.target.reset();
         alert('Email Sent !');
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };


    return(
        <div id="contact">
            <h1 className="contactPageTitle ">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text " className="name " placeholder="Your Name"  name="your_name"/>
                <input type="email " className="email " placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
                <button type="submit" value= "send" className="submitBtn">submit</button>
                <div className="contactImgs">
                <a href="https://www.facebook.com/ateendra.srivastava.18" target="_blank"><img src={FacebookIcon} alt=" Facebook" className="contactImg" /></a>
                <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">    <img src={InstagramIcon} alt="Instagram " className="contactImg" /></a>
                <a href="https://github.com/ateendra383" target="_blank">   <img src={GithubIcon} alt=" Github" className="contactImg" /></a> 
                <a href="https://www.linkedin.com/in/ateendra-srivastava-568775130/" target="_blank">    <img src={LinkdinIcon} alt="Linkdin " className="contactImg" /></a>
                </div>
            </form>
        
        </div>
    )
}


export default Contact;