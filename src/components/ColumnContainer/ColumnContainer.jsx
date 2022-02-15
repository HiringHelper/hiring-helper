import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column/Column.jsx';
import './ColumnContainer.scss';

function ColumnContainer() {
  const titles = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  function dragStart(){
    console.log('drag start');
  }

  function dragEnd(item){
    console.log('drag end');
    console.log('item is: ', item);
  }

  return (
    <div id='column-container'>
      <DragDropContext onDragEnd={dragEnd} onDragStart={dragStart}>
        {titles.map((ele) => {
          return <Column title={ele} />;
        })}
      </DragDropContext>
    </div>
  );
}

export default ColumnContainer;
