import React from 'react'
import './Card.scss'

function Card(props) {
  
  return (
    <div className='card'>
      <p className='card-title'>{props.title}</p>
      <em className='job-title'>Software Engineer</em>
    </div>
  )
}

export default Card