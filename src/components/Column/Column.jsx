import React from 'react';
import './Column.scss';
import Card from '../Card/Card.jsx';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

function Column(props) {
  // const cards = ['Chase', 'Facebook'];
  // const cards2 = [
  //   {
  //     name: 'Chase',
  //     title: 'Software Engineer',
  //     status: 'Applied',
  //   },
  //   {
  //     name: 'Facebook',
  //     title: 'Software Engineer',
  //     status: 'Wishlist',
  //   },
  //   {
  //     name: 'Netflix',
  //     title: 'Software Engineer',
  //     status: 'Rejected',
  //   },
  // ];
  const cards = useSelector((state) => state.jobs[props.title]);
  
  const name = props.title + '-column';

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
                  <Draggable key={ind} draggableId={'wishlist-' + ind + '-' + ele} index={ind}>
                    {(providedDrag, snapshot) => <Card title={ele} ind={ind} provided={providedDrag} isDragging={snapshot.isDragging} />}
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
