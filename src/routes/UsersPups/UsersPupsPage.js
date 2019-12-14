import React from 'react'
import './UsersPupsPage.css'
import NavBar from '../../components/NavBar/NavBar'

export default function UsersPupsPage(){
    return (
        <>
            <NavBar />
            <main role='main'>
            <h2>Your Pups</h2>
            <ul>
                <li>
                <img src='http://critapix.com/wp-content/uploads/2019/08/dog.jpg'/>
                <p>Doggo's name</p>
                </li>
                <li>
                <img src='http://critapix.com/wp-content/uploads/2019/08/dog.jpg'/>
                <p>Doggo's name</p>
                </li>
                <li>
                <img src='http://critapix.com/wp-content/uploads/2019/08/dog.jpg'/>
                <p>Doggo's name</p>
                </li>
                <li>
                <img src='http://critapix.com/wp-content/uploads/2019/08/dog.jpg'/>
                <p>Doggo's name</p>
                </li>
                <li>
                <img src='http://critapix.com/wp-content/uploads/2019/08/dog.jpg'/>
                <p>Doggo's name</p>
                </li>
            </ul>
            </main>
        </>
    )
}