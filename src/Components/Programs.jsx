import React from 'react'
import './Programs.css'
import Title from './Title'
import program_1 from '../assets/program-1.png'
import program_2 from '../assets/program-2.png'
import program_3 from '../assets/program-3.png'
import program_icon_1 from '../assets/program-icon-1.png'
import program_icon_2 from '../assets/program-icon-2.png'
import program_icon_3 from '../assets/program-icon-3.png'
const Programs = () => {
  return (
    <>
    <Title subtitle={'What we Offer'} title={'Our Program'}></Title>
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="content">
          <img src={program_icon_1} alt="" />
          <h2>Graduation Degree</h2>
        </div>
      </div><div className="program">
        <img src={program_2} alt="" />
        <div className="content">
          <img src={program_icon_2} alt="" />
          
          <h2>Masters Degree</h2>
        </div>
      </div><div className="program">
        <img src={program_3} alt="" />
        <div className="content">
          <img src={program_icon_3} alt="" />
          
          <h2>Post Graduation</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Programs
