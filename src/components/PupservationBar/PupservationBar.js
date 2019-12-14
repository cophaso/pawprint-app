import React from 'react'
import {Link} from 'react-router-dom'
import './PupservationBar.css';

export default function PupservationBar(){
    return(
        <div className='pupservationBar-container'>
            <Link className='pupservationBar-link' to='/pupservations'>Make a Pupservation</Link>
        </div>
    )
}