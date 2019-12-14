import React from 'react'
import './UsersPupsPage.css'
import NavBar from '../../components/NavBar/NavBar'
import UsersPupsList from '../../components/UsersPupsList/UsersPupsList'

export default function UsersPupsPage(){
    return (
        <>
            <NavBar />
            <main role='main'>
                <section className='usersPupsList-section'>
                    <h2>Your Pups</h2>
                    <UsersPupsList />
                </section>
            </main>
        </>
    )
}