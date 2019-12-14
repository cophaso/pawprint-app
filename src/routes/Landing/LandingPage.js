import React from 'react'
import './LandingPage.css'
import NavBar from '../../components/NavBar/NavBar'
import LoginBar from '../../components/LoginBar/LoginBar'
import Lab from '../../assets/images/lab.jpg'

export default function LandingPage(){
    return (
        <div className='landingPage-container'>
            <NavBar />
            <main role="main">
                <section className='landingPage-section'>
                    <header>
                        <h3>Find your new office bestie</h3>
                    </header>
                    <div className='landingPage-img'>
                        <img src={Lab} alt='placeholder pup' />
                    </div>
                    <p>PawPrint is a great way for your company to keep up with the office pups!</p>
                </section>
                <section className='landingPage-login'>
                    <LoginBar />
                </section>
            </main>
        </div>
    )
}