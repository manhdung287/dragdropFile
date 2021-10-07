import React from 'react';
import { ROUTER } from '../modules/ultils/router';


import styles from './Menu.module.scss';

function Menu({ className }) {
    return (
        <div className={styles.wrapper}>
            <a href={ROUTER.dragFile} className={styles.navItem + ' ' + className}>
                <span> Drag File</span>
                <span className={styles.border} />
            </a>
            <a href={ROUTER.dragItem} className={styles.navItem + ' ' + className}>
                <span> Drag - Sort</span>
                <span className={styles.border} />
            </a>
            <a href={ROUTER.buildPage} className={styles.navItem + ' ' + className}>
                <span>  Build Page</span>
                <span className={styles.border} />
            </a>
        </div>
    );
}

export default Menu;