import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import derp from '../../assets/images/derp.jpg';
import puggy from '../../assets/images/puggy.jpg';
import smartpup from '../../assets/images/smartpup.jpg';

export default class LandingCarousel extends Component {
    render() {
        return (
            <div className='carousel'>
            <Carousel autoPlay>
                    <div>
                        <img src={derp} />
                        <p className="legend">Snickers</p>
                    </div>
                    <div>
                        <img src={smartpup} />
                        <p className="legend">Janet</p>
                    </div>
                    <div>
                        <img src={puggy} />
                        <p className="legend">Elvis</p>
                    </div>
    
            </Carousel>
            </div>
        );
    }
};

