import React from 'react';
import './pupservationPage.css';
import NavBar from '../../components/NavBar/NavBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PupservationConfirm from '../../components/PupservationConfirm/PupservationConfirm';


class PupservationPage extends React.Component {
    state = {
      startDate: new Date()
    };

    handleChange = date => {
      this.setState({
        startDate: date
      });
    };

    
   
    render() {
        const options = [
            'Buster', 'Pickles', 'Kevin'
        ];
        const options2 = [
            'Grooming', 'Vet', 'Daycare'
        ];
          const defaultOption = options[0];
          const defaultOption2 = options2[0];

      return (
          
        <div>
        <NavBar />
        <div className="pupservationContainer">
            <h2>Pick a date:</h2>
                <div className='dateDropdown'>
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    />
                </div>
        <h2>Pick a pup:</h2>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

        <h2>Services:</h2>
        <Dropdown options={options2} onChange={this._onSelect} value={defaultOption2} placeholder="Select an option" />

        <PupservationConfirm />
        </div>
        </div>
      );
    }
  }

export default PupservationPage;
