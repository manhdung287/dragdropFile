import React from 'react';
import { logoLink } from '../modules/ultils/exampleData';
import { ROUTER } from '../modules/ultils/router';


function Logo() {
    return (
        <a href={ROUTER.home}>
            <img src={logoLink} alt='' width={200} className='logo-img'/>
        </a>
    );
}

export default Logo;