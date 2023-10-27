import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
import myResume from "../../assets/Ateendra_Srivastava.pdf"



const Intro =() =>{
   const openPDF = () => {
      window.open(myResume); // Open the PDF file in a new tab
  };
    return(
       <section id="intro">
         <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className=" introName">  ATEENDRA,</span> <br  /> Full Stack Developer (Frontent and Backend)</span>
            <p className=" introPara">I am a skilled web designer with experiance in creating <br />visually appealing and user frindly Website</p>
            <Link><button className="btn" onClick={openPDF}><img src={btnImg} alt="Hire" className="btnImg"/>My Resume</button></Link>
         </div>
         <img src={bg} alt="Profile" className="bg"/>

       </section>
    );
}



export default Intro;