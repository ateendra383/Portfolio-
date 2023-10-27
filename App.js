import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";


import"./App.css";
import  PacmanLoader from "react-spinners/PacmanLoader";


export function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PacmanLoader size={30} color={"#f5f2e6"}
          loading={loading} />
          ) : (

            <div className="App-container">
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <Contact />
         
          </div>
        )}
    </div>
  );

}
