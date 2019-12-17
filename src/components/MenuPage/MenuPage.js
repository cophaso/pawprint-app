import React from 'react'
import {Link} from 'react-router-dom'
import './MenuPage.css'
import NavBar from '../NavBar/NavBar'

export default function MenuPage(){
    return(
        <>
            <NavBar />
            <main>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/pupservations'>Make a Petservation</Link></li>
                    <li><Link to='/yourpups'>Your Pups</Link></li>
                    <li>Dog Pack</li>
                    <li>Signout</li>
                </ul>
            </main>
        </>
    )
}