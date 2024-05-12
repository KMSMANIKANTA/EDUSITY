import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import About from './Components/About'
import Campus from './Components/Campus'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <Hero></Hero>
      <Programs></Programs>
      <About></About>
      <Campus></Campus>
      <Contact></Contact>
      <br /><br /><br /><br /><br />
      <Footer></Footer>
    </div>
  )
}

export default App
