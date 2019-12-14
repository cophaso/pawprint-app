import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Menu.css'

export default function Menu(){
    return (
        <div className='hamburger-menu'>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}
