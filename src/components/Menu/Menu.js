import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './Menu.css'

export default function Menu(){
    return (
        <div className='hamburger-menu'>
            <Link to='/menu'><FontAwesomeIcon icon={faBars} /></Link>
        </div>
    )
}
