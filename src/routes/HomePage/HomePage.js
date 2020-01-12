import React from 'react';
import './homePage.css';
import NavBar from '../../components/NavBar/NavBar';
import PupservationBar from '../../components/PupservationBar/PupservationBar';
import {Link} from 'react-router-dom';



class HomePage extends React.Component {
    render() {
      return (
        <div>
            <NavBar />
      
      <div className = "welcomeBanner">
            <div className="dogCon">
                <span className="title">Welcome to</span>
                <span role='img' aria-label='icon' className="dogIcon">🐶</span>
                <span className="counter">PawPrint</span>
              </div>
            <div className='introduction'>
              <div className="gettingStarted">
                    <h3>Getting Started</h3>
                    <p>Add a pup through the link below to start scheduling your appointments.</p>
                    <Link to = './addpup'>Add a Pup</Link>
                </div>

                <div className='makePupservation'>
                  <p>Make a Pupservation to reserve a slot for your dog's vet care, grooming, daycare, or office visit.</p>
                </div>  
          </div>  
       </div>    

        <section>
          <PupservationBar />
        </section>
      
        </div>
      );
    }
  }
  
  
  
export default HomePage;
