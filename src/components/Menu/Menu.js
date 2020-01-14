import React from 'react';
import '../NavBar/NavBar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function Menu(){
    return (
        <div className='hamburger-menu'>
            <HamburgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
    )
}
