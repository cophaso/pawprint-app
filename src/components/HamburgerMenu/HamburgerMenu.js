import React from 'react'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import './HamburgerMenu.css'
import TokenService from '../../services/token-service'

export default props => {
   const handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    const renderLogoutLink = () => {
        return (
            <ul>
                <li><Link to='/login' className='bugerLink'>Login</Link></li>
                <li><Link to='/signup' className='bugerLink'>Signup</Link></li>
            </ul>
        )
      }
    
      const renderLoginLink = () => {
        return (
            <ul>
                <li><Link to='/home' className='bugerLink'>Home</Link></li>
                <li><Link to='/pupservations' className='bugerLink'>Make a Petservation</Link></li>
                <li><Link to='/yourpups' className='bugerLink'>Your Pups</Link></li>
                {/* <li><Link to='/' className='bugerLink'>Dog Pack</Link></li> */}
                <li><Link to='/' className='bugerLink' onClick={handleLogoutClick}>Signout</Link></li>
            </ul>
        )
      }

    return(
        <Menu {...props}>
            {TokenService.hasAuthToken()
                ? renderLoginLink()
                : renderLogoutLink()
                }
        </Menu>
    )
}