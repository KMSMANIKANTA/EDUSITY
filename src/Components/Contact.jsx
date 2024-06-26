import React, { useEffect } from 'react'
import './Contact.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Title from './Title'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a025d6c6-cd21-45ec-8810-4e3f2c196366");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
useEffect(()=>{
  Aos.init({duration:2000,offset:200})
})
  return (
    <>
       <Title title={'Contact Us'} subtitle={'Get in Touch'}></Title>
   
    <div className='contact'>
      <div className="left" data-aos='fade-left'>
        <h2>Send us a message   <FaMailBulk className='icon1' /> </h2>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <h4><CiMail className='icon'></CiMail> Contact@edusity.com</h4>
        <h4><FaPhoneAlt className='icon'></FaPhoneAlt> +1 123-456-7890</h4>
        <h4><IoLocation className='icon'></IoLocation> 77 Massachusetts Ave, Cambridge MA 02139, United States</h4>
      </div>
      <div className="right" data-aos='zoom-in'>
        <form className='forminput' onSubmit={onSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" placeholder='enter your name' required name='name' />
          <label htmlFor="phonenumber">Your Phoneno:</label>
          <input type="text" placeholder='enter your mobile' required name='phonenumber' />
          <label htmlFor="email">Your Email</label>
          <input type="email" required name='email'placeholder='enter your email' />
          <label htmlFor="text">Write the message you want</label>
          <textarea name="message" id="text" rows='6'></textarea>
          <button className='btn'>Submit</button>
          <span className='status'>{result}</span>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
