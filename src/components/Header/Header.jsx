import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';

function Header() {
  const jobModal = useSelector((state) => state.modals.jobModal)
  const dispatch = useDispatch()

  const [ openJobModal, setOpenJobModal ] = useState(false);


  return(
    <div id='header'>
      <button id='add-job'>
        + Add job
      </button>
      <div id='title'>
        <h1>App Name</h1>
      </div>
      <div id='hello'>
        <p>Hello, Huy!</p>
      </div>
    </div>
  )
}

export default Header;
