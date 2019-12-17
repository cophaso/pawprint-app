import React from 'react'
import {Link} from 'react-router-dom'
import './PupservationConfirm.css';

export default function PupservationConfirm(){
    return(
        <div className='pupservationConfirm-container'>
            <Link className='pupservationConfirm-link' to='/pupservations'>Submit</Link>
        </div>
    )
}