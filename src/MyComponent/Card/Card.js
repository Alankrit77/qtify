/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Card.css';

function Card({imgSrc,followersCount,label}) {
  
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-img-frame'>
          <img className='card-img' src={imgSrc}alt='Card Image' />
        </div>
        <div className='card-content'>
          <span className='card-content-pill'>{followersCount} follows</span>
        </div>
      </div>
      <p className='card-label'>{label} </p>
    </div>
  );
}

export default Card;
 