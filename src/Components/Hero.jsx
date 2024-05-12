import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="content">
      <h1>We ensure better education <br></br>for a better world</h1>
      <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
      
      <button className='btn'>Explore More<FaLongArrowAltRight></FaLongArrowAltRight></button>
      </div>
    </div>
  )
}

export default Hero
