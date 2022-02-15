import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column/Column.jsx';
import './ColumnContainer.scss';

function ColumnContainer() {
  const titles = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  function dragStart(){
    console.log('drag start');
  }

  function dragEnd(result){
    const {destination, source, draggableId } = result
    console.log(destination.droppableId)
    console.log(source.droppableId)
    console.log('drag end');
    // console.log('item is: ', item);
  }

  return (
    <div id='column-container'>
      <DragDropContext onDragEnd={dragEnd} onDragStart={dragStart}>
        {titles.map((ele, index) => {
          return <Column title={ele} inde={index}/>;
        })}
      </DragDropContext>
    </div>
  );
}

export default ColumnContainer;
