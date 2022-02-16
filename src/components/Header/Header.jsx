import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openJobModal } from '../../redux/showModalSlice';
import AddJobModal from '../AddJobModal/AddJobModal.jsx';
import './Header.scss';

function Header() {
  const jobModal = useSelector((state) => state.modals.jobModal)
  const dispatch = useDispatch()


  const addJobClick = () => {
    dispatch(openJobModal(true));
  }
  return(
    <>
      <div id='header'>
        <button id='add-job' onClick={addJobClick} style={{fontSize:'1.2rem'}} >
          + Add job
        </button>
        <div id='title'>
          <h1>App Name</h1>
        </div>
        <div id='hello'>
          <p>Hello, Huy!</p>
        </div>
      </div>
      {jobModal && (
        <AddJobModal />
      )}
    </>
  )
}

export default Header;
