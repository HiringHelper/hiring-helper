import React from 'react';
import './Card.scss';

function Card(props) {
  function onClick(){
    console.log('ele is: ', props.obj);
    
  }

  return (
    <div className='card' onClick={onClick} id={props.id} ref={props.provided.innerRef} {...props.provided.draggableProps} {...props.provided.dragHandleProps}>
      <p className='card-title'>{props.obj.companyName}</p>
      <em className='job-title'>{props.obj.jobTitle}</em>
    </div>
  );
}

export default Card;
