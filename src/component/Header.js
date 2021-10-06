import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container+' container'}>
                <Logo />
                <Menu />
            </div>
        </div>

    );
}

export default Header;