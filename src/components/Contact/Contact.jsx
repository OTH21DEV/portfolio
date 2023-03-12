import React from 'react'

import './contact.css'

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
      I'm <span style={{ color: "rgb(255, 4, 255)" , fontWeight: "bold", fontFamily: "Bebas Neue", letterSpacing: "0.1em"}}>currently available</span> and looking to collaborate on new projects.
      <br />
      Let's have a conversation.{" "}
    </p>
<a target="_blank" rel="noopener noreferrer" href="mailto:'otheis@protonmail.com'">GET IN TOUCH</a>

  {/*      <a href = "mailto: otheis@protonmail.com">GET IN TOUCH</a>*/}
  </div>
  )
}

export default Contact