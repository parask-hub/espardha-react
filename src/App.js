
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import TestSection from './components/TestSection';
import light from "./images/icons8-sun-48.png"
import moon from "./images/icons8-moon-64.png"
import React, { useState } from 'react'
import Register_form from './components/Register_form';




function App() {

  const [mode,setmode]=useState("light");
  const [mode_img,setmode_img] = useState(moon)
  const [mystyle,setmystyle] = useState({
    backgroundColor : "white"
   
  })
  
  const toggle =()=>{
    if(mode === "light")
    {
      setmystyle (
        {
            transition : "0.5s",
            backgroundColor : "#010824"
        }
        )
        setmode(prevmode=>"dark")
        setmode_img(prevmode_img => light)
    }
    else
    {
       setmystyle(
        {
            transition : "0.5s",
            backgroundColor : "white"
        }
        )
        setmode(prevmode=>"light")
         setmode_img(prevmode_img => moon)
    }
   
  }

  return (
    <>
      <body style={mystyle}>
        <Banner />
        <div className="cont" style={mystyle}>
          <Navbar/>
        </div>
        <marquee>
          !! Limited Seats Are There Book Your Seat Now !!
        </marquee>
        <div className="mode">       
        <img src={mode_img} height = "48px" width = "48px"alt="" onClick={toggle}/>
        </div>
        <TestSection />
        <AboutUs />
        <Register_form id = "register_form"/>
        <Footer />
      </body>
    </>
  );
}

export default App;
