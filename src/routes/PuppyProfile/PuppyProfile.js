import React from 'react';
import './PuppyProfile.css';
import NavBar from '../../components/NavBar/NavBar';
import dogpup from '../../assets/images/dogpup.jpg';



class PuppyProfile extends React.Component {
    constructor(props) {
      super(props);
    }
  
  
    render() {
      return (
        <div>
            <NavBar />
            
        <section className="hero">
            <div className="centered">
                <div className="dogImage">
                    <img src={dogpup} className="profilePic"  />
                    <div className="dogName">Pickles</div>
                </div>
            </div>
        </section>

        <section className="about">
            <h3 className='sectionTitle'>About:</h3>
                <ul className='aboutPup'>
                    <li>Breed:</li>
                    <li>Allergies:</li>
                    <li>Hobbies:</li>
                    <li>Parent:</li>
                </ul>
        </section>

        <section className="visits">
            <h3 className='sectionTitle'>Office Visits:</h3>
                <ul className='aboutPup'>
                    <li>Tues, Dec. 23rd</li>
                    <li>Wed, Dec. 24th</li>
                    <li>Fri, Dec 28th:</li>
                </ul>
        </section>

        <section className="services">
            <h3 className='sectionTitle'>Services:</h3>
                <ul className='aboutPup'>
                    <li>Grooming: Dec. 23rd</li>
                </ul>
        </section>
      
        </div>
      );
    }
  }
  
  
  
export default PuppyProfile;
