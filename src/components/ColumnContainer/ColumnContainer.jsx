import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../Column/Column.jsx';
import {drop} from '../../redux/jobsSlice';
import './ColumnContainer.scss';

function ColumnContainer() {
  const titles = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];
  const dispatch = useDispatch()

  function dragStart(){
    console.log('drag start');
  }

  function dragEnd(result){
    const {destination, source, draggableId } = result
    const target = draggableId

    dispatch(drop({destination:destination.droppableId, source: source.droppableId, target}))
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
