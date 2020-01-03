import React from 'react'
import './LandingPage.css'
import NavBar from '../../components/NavBar/NavBar'
import LoginBar from '../../components/LoginBar/LoginBar'
import grump from '../../assets/images/grump.jpg'
import eyes from '../../assets/images/eyes.jpg'
import LandingCarousel from '../../components/LandingCarousel/landingCarousel'

export default function LandingPage(){
    return (
        <div className='landingPage-container'>
            <NavBar />
            <div className='carouselContainer'>
                <LandingCarousel />
            </div>
            <main role="main">
                <section className='landingpage'>
                    <section className='landingPage-section1'>
                        <header>
                            <h3>Find your new office bestie</h3>
                        </header>
                        <div className='landingPage-img'>
                            <img src={grump} alt='placeholder pup' />
                        </div>
                        <h4>PawPrint is a great way to keep up with the office pups</h4>
                    </section>

                    <section className='landingPage-section2'>
                        <h4>Find out who's visiting the office and help your team know you're bringing your furbaby to work.
                        </h4>
                    </section>

                    <section className='landingPage-section3'>
                        <header>
                            <h3>Make Appointments</h3>
                        </header>
                        <div className='landingPage-img'>
                            <img src={eyes} alt='placeholder pup' />
                        </div>
                        <h4>Schedule a play date or a grooming appointment easily</h4>
                    </section>

                </section>

                <section className='landingPage-login'>
                    <LoginBar />
                </section>
            </main>
        </div>
    )
}