import React from 'react'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import './HamburgerMenu.css'
import TokenService from '../../services/token-service'

export default props => {
   const handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }
    return(
        <Menu {...props}>
            <ul>
                <li><Link to='/' className='bugerLink'>Home</Link></li>
                <li><Link to='/pupservations' className='bugerLink'>Make a Petservation</Link></li>
                <li><Link to='/yourpups' className='bugerLink'>Your Pups</Link></li>
                <li><Link to='/' className='bugerLink'>Dog Pack</Link></li>
                <li><Link to='/' className='bugerLink' onClick={handleLogoutClick}>Signout</Link></li>
            </ul>
        </Menu>
    )
}