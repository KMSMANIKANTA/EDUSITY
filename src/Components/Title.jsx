import React from 'react'
import './Title.css'

const Title = ({subtitle,title}) => {
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <h4 className='subtitle'>{subtitle}</h4>
    </div>
  )
}

export default Title
