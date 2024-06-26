import React from 'react'
import Title from './Title'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Campus.css'
import gallery_1 from '../assets/gallery-1.png'
import gallery_2 from '../assets/gallery-2.png'
import gallery_3 from '../assets/gallery-3.png'
import gallery_4 from '../assets/gallery-4.png'
const Campus = () => {
  useEffect(()=>{
    Aos.init({duration:2000,offset:220})
  },[])
  return (
    <>
    <Title title={'Gallery'} subtitle={'gallery Photos'}></Title>
    <div className='gallery'>
      <img src={gallery_1} alt="" data-aos='zoom-in'  />  
      <img src={gallery_2} alt="" data-aos='zoom-in' data-aos-delay='300'/>
      <img src={gallery_3} alt="" data-aos='zoom-in' data-aos-delay='500'/>
      <img src={gallery_4} alt=""  data-aos='zoom-in'data-aos-delay='700'/>
      
      <img src={gallery_1} alt="" data-aos='zoom-in' data-aos-delay='900' />  
      <img src={gallery_2} alt="" data-aos='zoom-in' data-aos-delay='1100'/>
      <img src={gallery_3} alt="" data-aos='zoom-in' data-aos-delay='1300' />
      <img src={gallery_4} alt="" data-aos='zoom-in' data-aos-delay='1500' />
    </div>
    </>
  )
}

export default Campus
