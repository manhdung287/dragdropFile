import React from 'react';
import { ROUTER } from '../modules/ultils/router';


import './Menu.scss';
function Menu() {
    return (
        <div className='menu'>
            <a href={ROUTER.home} className='nav-item'>
                Home
            </a>
            <a href={ROUTER.drag}  className='nav-item'>
                Drag - Sort
            </a>
        </div>
    );
}

export default Menu;