import React from 'react'
import leaf1 from "../../assets/leaf1.png";
import leaf2 from "../../assets/leaf2.png";
import leaf3 from "../../assets/leaf3.png";
import './leafs.css'

function Leafs() {
  return (

    <div className="leafs">
    <div className="leaf-container">
      <img className="leaf1" src={leaf1} alt=""></img>
      <img className="leaf2" src={leaf2} alt=""></img>
      <img className="leaf3" src={leaf3} alt=""></img>
    </div>
  </div>
  )
}

export default Leafs