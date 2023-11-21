/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-img-frame'>
          <img className='card-img' src='https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800' alt='Card Image' />
        </div>
        <div className='card-content'>
          <span className='card-content-pill'>100 follows</span>
        </div>
      </div>
      <p className='card-label'>New English Songs </p>
    </div>
  );
}

export default Card;
 