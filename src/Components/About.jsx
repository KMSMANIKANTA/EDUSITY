import React from 'react'
import about from '../assets/about.png'
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="" />
      </div>
      <div className="about-right">
        <h2>About University</h2>
        <h1>Nurturing Tomorrow's Leaders Today</h1>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
