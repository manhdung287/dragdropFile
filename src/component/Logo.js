import React from 'react';
// import { logoLink } from '../modules/ultils/exampleData';
import { ROUTER } from '../modules/ultils/router';
import styles from './Logo.module.scss';

function Logo() {
    return (
        <a href={ROUTER.home}>
            <p className={styles.text} >Mạnh Dũng</p>
        </a>
    );
}

export default Logo;