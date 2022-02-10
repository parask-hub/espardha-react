import React from 'react'
import photo from '../images/oie_Gw5ReiUPOdiL.png'
import linkedin from '../images/icons8-linkedin-48.png'
import insta from '../images/icons8-instagram-48.png'
import facebook from  '../images/icons8-facebook-48.png'



export default function AboutUs() {
  return (
    <>
      {/* <div className="container"> */}
        <div id="about">
            <img className="i" src={photo} alt="" height="140px"/>
            <div className="smedia">
                <img src={linkedin} alt=""/>
                <img src={insta} alt=""/>
                <img src={facebook} alt=""/>
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sequi incidunt animi error fuga eligendi
            nulla
            aspernatur! Magnam voluptatum itaque nam nobis officiis, natus aperiam! Vitae nam ducimus debitis
            adipisci
            laboriosam similique! Vero accusantium beatae iste rem mollitia dolore impedit in, voluptates cum

        </div>
        {/* </div> */}
    </>
  )
}
