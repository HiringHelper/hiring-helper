import React from 'react';
import './Header.scss';

function Header() {
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
