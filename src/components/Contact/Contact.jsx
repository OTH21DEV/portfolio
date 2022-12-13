import React from 'react'
import Leafs from '../Leafs/Leafs'
import './contact.css'
import green from '../../assets/nature.png'
//   <img className='test'src={green}alt=""/>
function Contact() {
  return (
    <div className="contact" id="contact">
     

     <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>

    <h2>Got a project in mind ?</h2>
    <p>
      I'm <span style={{ color: "rgb(255, 4, 255)" }}>currently available</span> and looking to collaborate on new project.
      <br />
      Let's have a conversation about.{" "}
    </p>
    <button type="button">GET IN TOUCH</button>

  {/*  <Leafs />*/}
  </div>
  )
}

export default Contact