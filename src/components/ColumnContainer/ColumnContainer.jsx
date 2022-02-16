import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../Column/Column.jsx';
import {drop} from '../../redux/jobsSlice';
import './ColumnContainer.scss';

function ColumnContainer() {
  const titles = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];
  const dispatch = useDispatch()

  function dragStart(item){
  }

  function dragEnd(item){ //runs anytime a card is dropped
    if(!item.destination) return;
    dispatch(drop(item));
    //update database with card info here
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
