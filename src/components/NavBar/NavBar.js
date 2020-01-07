import React from 'react'
import './NavBar.css'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

export default function NavBar(){
    return (
        <nav role='navigation'>
            <div className='navigation'>
                <div className='menuNav'>   
                    <Menu />
                </div>
                <div className='logoNav'>  
                    <Logo />
                </div>
            </div>
        </nav>
    )
}

