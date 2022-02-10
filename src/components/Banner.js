import React from 'react'
import banner from "../images/espardha bannee.jpg"

export default function Navbar() {
  return (
      <div className="buffer" id="top">
        <div className="banner">
            <img src={banner} height="100px" width="100%"/>
            <span className="center">e-spardha</span>



        </div>
        </div>
  )
}