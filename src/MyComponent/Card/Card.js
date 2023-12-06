/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Card.css';
import Tooltip from '@mui/material/Tooltip';

function Card({imgSrc,followersCount,label,tooltipText}) {
  console.log('Label:', label);
  
  return (<div className='card-wrapper'>
  <Tooltip title={tooltipText} arrow placement="top">
  <div className='card'>
      <div className='card-img-frame'>
          <img className='card-image' src={imgSrc} />
      </div>
      <div className='card-content'>
          <span className='card-content-pill'>
              {followersCount} follows
          </span>
      </div>
  </div>
  </Tooltip>
  <p className='card-label'>{label}</p>
</div>)

}

export default Card;
  