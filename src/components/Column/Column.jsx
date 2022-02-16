import React from 'react';
import './Column.scss';
import Card from '../Card/Card.jsx';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

function Column(props) {
  const cards = useSelector((state) => state.jobs[props.title]);

  const name = props.title;

  return (
    <div className='column'>
      <div className='column-title'>
        <p>{props.title}</p>
      </div>
      <Droppable droppableId={name}>
        {(providedDrop) => {
          return (
            <div className='card-container' {...providedDrop.droppableProps} ref={providedDrop.innerRef}>
              {cards.map((ele, ind) => {
                return (
                  <Draggable key={ind} draggableId={props.title + '-' + ele.companyName + '-' + ind} index={ind}>
                    {(providedDrag, snapshot) => (
                      <Card id={props.title + '-' + ele.companyName + '-' + ind} obj={ele} ind={ind} provided={providedDrag} isDragging={snapshot.isDragging} />
                    )}
                  </Draggable>
                );
              })}
              {providedDrop.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

export default Column;
