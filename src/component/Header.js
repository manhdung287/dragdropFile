import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';

import styles from './Header.module.scss';

function Header() {

    const [scrollUp,setScollUp] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(()=>{
        let prevScrolls = window.pageYOffset;
        window.onscroll=()=>{
            let currentScroll = window.pageYOffset;
            if(prevScrolls > currentScroll){
                setScollUp(true)
                setScrollDown(false);
            }else{
                setScollUp(false)
                setScrollDown(true)
            };
            prevScrolls = currentScroll;
            if(prevScrolls === 0){
                setScollUp(false)
                setScrollDown(false)
            }
        };
    },[]);

    const _scrollUp = scrollUp ? styles.scrollUp:' ';
    const _scrollDown = scrollDown ? styles.scrollDown:' ';
    return (
        <div className={styles.wrapper + ' '+ _scrollUp+' ' +_scrollDown}>
            <div className={styles.container +' container'}>
                <Logo />
                <Menu className={styles.menuItem}/>
            </div>
        </div>

    );
}

export default Header;