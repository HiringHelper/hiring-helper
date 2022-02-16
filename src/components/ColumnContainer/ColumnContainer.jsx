import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../Column/Column.jsx';
import { drop } from '../../redux/jobsSlice';
import './ColumnContainer.scss';

function ColumnContainer() {
  const titles = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.jobs);

  function dragStart(item) {}

  function dragEnd(item) {
    //runs anytime a card is dropped
    if (!item.destination) return;
    dispatch(drop(item));
    updateUser();
  }

  function updateUser() {
    fetch('http://localhost:3000/user/update-state', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: state.user_id,
        state: JSON.stringify(state),
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('update user res: ', res);
      });
  }

  return (
    <div id='column-container'>
      <DragDropContext onDragEnd={dragEnd} onDragStart={dragStart}>
        {titles.map((ele, index) => {
          return <Column title={ele} inde={index} />;
        })}
      </DragDropContext>
    </div>
  );
}

export default ColumnContainer;
