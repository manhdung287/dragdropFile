import React from 'react';
import { logoLink } from '../modules/ultils/exampleData';
import { ROUTER } from '../modules/ultils/router';



import './Header.scss';

function Logo() {
    return (
        <a href={ROUTER.home}>
            <img src={logoLink} alt='' className='logo-img'/>
        </a>
    );
}

export default Logo;