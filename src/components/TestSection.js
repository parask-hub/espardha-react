import React from 'react'
import img from "../images/Online test-rafiki.png"

export default function TestSection() {
  return (
    <div>
        <div className='content'>
            
       <div className="test-section">
            <img src={img} height="300px" width="300px" alt=""/>
            <div className="test-container">



                <p>Test Topic : Rotational Motion</p>
                <button className="start-test-btn"><a href="test_home_page.html"> Start Test </a></button>

            </div>
        </div>
    
       </div>
    </div>
  )
}
