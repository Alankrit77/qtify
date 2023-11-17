/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './Navbar.css';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';

function Navbar() {
    return (
        <div className='navbar'>
            
            <img src='Group 1logo (1).png'  />
            <SearchBox/>
            <Button >Give Feedback</Button>
        </div>

    );
}

export default Navbar;
