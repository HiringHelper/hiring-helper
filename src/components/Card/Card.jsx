import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className='card' ref={props.provided.innerRef} {...props.provided.draggableProps} {...props.provided.dragHandleProps}>
      <p className='card-title'>{props.title}</p>
      <em className='job-title'>Software Engineer</em>
    </div>
  );
}

export default Card;
