import React from 'react'
import '../App.css'
// import './navbar_script'
import nav from "../images//icons8-menu-50.png"



export default function Navbar() {
  return (
    <div>


<div id="header" >
        <div className="navbar sticky-top ">
            <div className=" navbar_link-logo">
                E-Spardha
            </div>
            <div className="navbar_link navbar_link-toggle">
                <img src={nav} height="20px" width="30px"/>
            </div>

            <nav className="navbar_items">
                <div className="navbar_link">
                    <a href="/"> Home </a>
                </div>
                {/* <!-- DROPDOWN OF COURSES --> */}
                <div className="navbar_link">
                    <span className="dropdown">
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                            Courses
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/">JEE-Mains</a></li>
                            <li><a href="/">NEET</a></li>
                            <li><a href="/">JIPMER</a></li>
                            <li><a href="/">MH-CET</a></li>

                        </ul>

                    </span>

                </div>
                <div className="navbar_link">
                    <span className="dropdown">
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown"> Notes<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/">Mathematics</a></li>
                            <li><a href="/">Physics</a></li>
                            <li><a href="/">Biology</a></li>
                            {/* <!-- <li className="divider"></li> --> */}
                            <li><a href="/">Chemistry</a></li>
                            <li><a href="/">Zoology</a></li>

                        </ul>

                    </span>

                </div>
                <div className="navbar_link">
                    <a href="#about">About Us</a>

                </div>
                <div className="navbar_link">
                    <a href="/"> Contact Us</a>

                </div>
            </nav>
            <nav className="navbar_items  navbar_items-right">
                <div className="navbar_linkr">
                    Log In
                </div>
                <div className="navbar_linkr">
                    Register
                </div>
           

            </nav>
        </div>
    </div>
   
</div>
    

  
  )
}
