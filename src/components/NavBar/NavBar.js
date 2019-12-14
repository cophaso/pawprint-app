import React from 'react'
import './NavBar.css'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

export default function NavBar(){
    return (
        <nav role='navigation'>
            <Menu />
            <Logo />
        </nav>
    )
}

