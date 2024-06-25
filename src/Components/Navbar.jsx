import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  const [toggle,setToggle]=useState(true)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
       window.scrollY >50?setSticky(true):setSticky(false);
    })
    Aos.init({duration:2000})
  },[])
  return (
    <div className={`container nav ${sticky?'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' data-aos='zoom-in'/>
      <ul className={`navlinks ${!toggle?'active':''}`}  >
        <li data-aos='zoom-in'><Link to='hero' smooth offset={0} duration={1000} onClick={()=>{
          setToggle(!toggle)
        }}>Home</Link></li>
        <li><Link to='programs' smooth offset={-230} duration={1000}  onClick={()=>{
          setToggle(!toggle)
        }} data-aos='zoom-in'>Program</Link></li>
        <li><Link to='about' smooth offset={-100} duration={1000}  onClick={()=>{
          setToggle(!toggle)
        }} data-aos='zoom-in'>About Us</Link></li>
        <li><Link to='gallery' smooth offset={-200} duration={1000}  onClick={()=>{
          setToggle(!toggle)
        }} data-aos='zoom-in'>Campus</Link></li>
        <li className='last' data-aos='zoom-in'><Link to='contact' smooth duration={1000} offset={-200}  onClick={()=>{
          setToggle(!toggle)
        }} data-aos='zoom-in'>Contact</Link></li>
        
      </ul>
      <div className='toggle' onClick={()=>{
        setToggle(!toggle)
      }}>{toggle?<FaBars className='bar'/>:<ImCross className='cross'/>}</div>
    </div>

  )
}

export default Navbar
