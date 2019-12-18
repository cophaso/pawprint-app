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
                <span className="counter">#</span>
            </div>
        </section>

        <section className="dogAvatars">
          <div className="dogList">
                <div class='row'>
                  <div class='column'>
                    <div class='one-column'>
                       <UserAvatar size="100" name="avatar" src={puggy} class="avatar" />
                       <UserAvatar size="100" name="avatar" src={derp} class="avatar" />
                       <UserAvatar size="100" name="avatar" src={puggy} class="avatar" />
                       <UserAvatar size="100" name="avatar" src={derp} class="avatar" />


                    </div>
                  </div>
                  <div class='column'>
                    <div class='two-column'>
                       <UserAvatar size="100" name="avatar" src={dogpup} class="avatar" />
                       <UserAvatar size="100" name="avatar" src={eye} class="avatar" />
                       <UserAvatar size="100" name="avatar" src={dogpup} class="avatar" />
                       <UserAvatar size="100" name="avatar" src={eye} class="avatar" />

                    </div>
                  </div>
                      <div class='column'>
                    <div class='three-column'>
                      <UserAvatar size="100" name="avatar" src={corgi} class="avatar"/>
                      <UserAvatar size="100" name="avatar" src={lab} class="avatar"/>
                      <UserAvatar size="100" name="avatar" src={corgi} class="avatar"/>
                      <UserAvatar size="100" name="avatar" src={lab} class="avatar"/>

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
