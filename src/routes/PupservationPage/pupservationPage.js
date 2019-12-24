import React from 'react';
import './pupservationPage.css';
import NavBar from '../../components/NavBar/NavBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PupservationConfirm from '../../components/PupservationConfirm/PupservationConfirm';
import config from '../../config';

class PupservationPage extends React.Component {
    state = {
      startDate: new Date(),
      pup_name: "", 
      service_type: "",
    };

  // sets the date for the date picker
  handleChange = date => {
      this.setState({
        startDate: date
      });
    };

   
    render() {

      // ADD A PUP FORM --> PROFILE ABOUT
      // get api for pups via fetch
      // and check the userid === parentd then show pups
      // submit redirect to the profile page
      // profile updated with submitted form info

      // SERVICES FORM --> PROFILE SERVICES
      // get api for pupservices via fetch
      // use pupsservice service for services via fetch
      // and check the userid === parentd then show pups
      // submit redirect to the profile page
      // profile updated with submitted form info

      // options are user's pups
        const options = [
            'Buster', 'Pickles', 'Kevin'
        ];
        const options2 = [ 
          // services are always the same
            'Grooming', 'Vet', 'Daycare'
        ];
          const defaultOption = options[0];
          const defaultOption2 = options2[0];

      return (
          
        <div>
        <NavBar />
        <div className="pupservationContainer">
        <h2 className='pupservation-heading'>Make a Pupservation</h2>
        <form 
            className='pupservationForm'
            onSubmit={e => this.handleSubmit(e)}>
            <h3 className='pupservation-header'>Pick a date:</h3>
                <div className='dateDropdown'>
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    />
                </div>
        <h3 className='pupservation-header'>Pick a pup:</h3>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

        <h3 className='pupservation-header'>Services:</h3>
        <Dropdown options={options2} onChange={this._onSelect} value={defaultOption2} placeholder="Select an option" />
        
        <PupservationConfirm />
        </form>
        </div>
        </div>
      );
    }
  }

export default PupservationPage;
