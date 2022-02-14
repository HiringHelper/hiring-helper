import React from 'react';
import Column from '../Column/Column.jsx';
import './ColumnContainer.scss';

function ColumnContainer() {
  const titles = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  return (
    <div id='column-container'>
      {titles.map((ele) => {
        return <Column title={ele} />;
      })}
    </div>
  );
}

export default ColumnContainer;
