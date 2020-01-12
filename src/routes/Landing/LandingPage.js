import React from 'react';
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginBar from '../../components/LoginBar/LoginBar';
import grump from '../../assets/images/grump.jpg';
import eyes from '../../assets/images/eyes.jpg';
import LandingCarousel from '../../components/LandingCarousel/landingCarousel';

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
                            <h3>Dog-friendly office?</h3>
                        </header>
                        <div className='landingPage-img'>
                            <img src={grump} alt='placeholder pup' />
                        </div>
                        <h4>PawPrint helps employees manage pup office visits and appointments</h4>
                    </section>

                    <section className='landingPage-section2'>
                        <h4>Individuals can add a pup to their profile to make scheduling easy</h4>
                    </section>

                    <section className='landingPage-section3'>
                        <header>
                            <h3>Have a meeting?</h3>
                        </header>
                        <div className='landingPage-img'>
                            <img src={eyes} alt='placeholder pup' />
                        </div>
                        <h4>Schedule a grooming, vet care, or day care appointment</h4>
                    </section>

                </section>

                <section className='landingPage-login'>
                    <LoginBar />
                </section>
            </main>
        </div>
    )
}