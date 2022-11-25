import React from 'react'
import Leafs from '../Leafs/Leafs'
import './contact.css'

function Contact() {
  return (
    <div className="contact" id="contact">
    <h2>Got a project in mind ?</h2>
    <p>
      I'm <span style={{ color: "rgb(255, 4, 255)" }}>currently available</span> and looking to collaborate on new project.
      <br />
      Let's have a conversation about.{" "}
    </p>
    <button type="button">GET IN TOUCH</button>

    <Leafs />
  </div>
  )
}

export default Contact