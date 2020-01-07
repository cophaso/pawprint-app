import React from 'react';
import './homePage.css';
import NavBar from '../../components/NavBar/NavBar';
import PupservationBar from '../../components/PupservationBar/PupservationBar';
import {Link} from 'react-router-dom'



class HomePage extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    
    render() {
      return (
        <div>
            <NavBar />
            
        <section className="calendar">
            <div className = "dogCalendar">
                <span className="title">Welcome to</span>
                <span role='img' aria-label='icon' className="dogIcon">🐶</span>
                <span className="counter">PawPrint</span>
            </div>
        </section>

        <section className="dogAvatars">
          <div className="dogList">
                <div className='gettingStarted'>
                       <h3>Getting Started</h3>
                       <p>If this is your first time logging in, please add a pup through the link below.</p>
                      <Link to = './addpup'>Add a Pup</Link>
                  </div>

                  <div className='makePupservation'>
                    <p>Or make a Pupservation to reserve an appointment for vet care, grooming, daycare, or a simple office visit.</p>
                  </div>
          </div>          
        </section>

        <section>
          <PupservationBar />
        </section>
      
        </div>
      );
    }
  }
  
  
  
export default HomePage;
