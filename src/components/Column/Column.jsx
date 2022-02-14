import React from 'react';
import './Column.scss';
import Card from '../Card/Card.jsx';
function Column(props) {
  const cards = ['Chase', 'Facebook'];
  
  return (
    <div className='column'>
      <div className='column-title'>
        <p>{props.title}</p>
      </div>
      <div className='card-container'>
        {cards.map((ele) => (
          <Card title={ele} />
        ))}
      </div>
    </div>
  );
}

export default Column;
