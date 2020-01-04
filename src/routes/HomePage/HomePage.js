import React from 'react';
import './homePage.css';
import NavBar from '../../components/NavBar/NavBar';
import PupservationBar from '../../components/PupservationBar/PupservationBar';
import puggy from '../../assets/images/puggy.jpg';
import dogpup from '../../assets/images/dogpup.jpg';
import corgi from '../../assets/images/corgi.jpg';
import derp from '../../assets/images/derp.jpg';
import eye from '../../assets/images/eye.jpg';
import lab from '../../assets/images/lab.jpg';

import UserAvatar from 'react-user-avatar';


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
                <span className="title">Today's Guests</span>
                <span role='img' aria-label='icon' className="dogIcon">🐶</span>
                <span className="counter">Count: 12</span>
            </div>
        </section>

        <section className="dogAvatars">
          <div className="dogList">
                <div className='row'>
                  <div className='column'>
                    <div className='one-column'>
                       <UserAvatar size="100" name="avatar" src={puggy} className="avatar" />
                       <UserAvatar size="100" name="avatar" src={derp} className="avatar" />
                       <UserAvatar size="100" name="avatar" src={puggy} className="avatar" />
                       <UserAvatar size="100" name="avatar" src={derp} className="avatar" />


                    </div>
                  </div>
                  <div className='column'>
                    <div className='two-column'>
                       <UserAvatar size="100" name="avatar" src={dogpup} className="avatar" />
                       <UserAvatar size="100" name="avatar" src={eye} className="avatar" />
                       <UserAvatar size="100" name="avatar" src={dogpup} className="avatar" />
                       <UserAvatar size="100" name="avatar" src={eye} className="avatar" />

                    </div>
                  </div>
                      <div className='column'>
                    <div className='three-column'>
                      <UserAvatar size="100" name="avatar" src={corgi} className="avatar"/>
                      <UserAvatar size="100" name="avatar" src={lab} className="avatar"/>
                      <UserAvatar size="100" name="avatar" src={corgi} className="avatar"/>
                      <UserAvatar size="100" name="avatar" src={lab} className="avatar"/>

                    </div>
                  </div>
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
