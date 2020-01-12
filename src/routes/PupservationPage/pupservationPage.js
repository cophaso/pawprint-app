import React from 'react';
import './pupservationPage.css';
import NavBar from '../../components/NavBar/NavBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import PupsApiService from '../../services/pups-api-service';
import PupServicesApiService from '../../services/pup-services-api-service';


class PupservationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    startDate: new Date(),
    pups: [], 
    services: [],
    error: null
    };
  };

  componentDidMount() {
    PupsApiService.getPups()
      .then( puppers => this.setState({pups: puppers}) )
  };

    // sets the date for the date picker
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };

    handleSubmit = ev =>{
      ev.preventDefault();
  
      this.setState({error: null});
  
      const {dateList, pupList, serviceList, note} = ev.target;

      if(pupList.value === ''){
        this.setState({error: 'Please Choose Or Add a Pup'})
      }
      else if(dateList.value === ''){
        this.setState({error: 'Please Choose a Date'})
      }
      else {
        PupServicesApiService.postPupService({
          appt_date: dateList.value,
          service_type: serviceList.value,
          note: note.value,
          pup_id: pupList.value
        })
        .then(res => {
            note.value = ''
            window.location.assign(`/profile/${pupList.value}`)
        })
        .catch(res => {
          throw new Error(res.error);
        })
      }
    }
   
    render() {
      const { error } = this.state;
      const dropPups = this.state.pups.map((pup, i) => {
        if (pup.parent_id.toString() === localStorage.getItem('user_id').toString()){
          return (
            <option key={i} value={pup.id}>{pup.pup_name}</option>
          )
        }
        else{
          return <></>
        }
      });

      return (
          
        <div>
        <NavBar />
        <div className="pupservationContainer">
        <h2 className='pupservation-heading'>Make a Pupservation</h2>
          <form 
            className='pupservationForm'
            onSubmit={e => this.handleSubmit(e)}>
              <div role='alert'>
                {error && <p className='red'>{error}</p>}
              </div>
              <h3 className='pupservation-header'>Pick a date:</h3>
                  <div className='dateDropdown'>
                      <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      name='dateList'
                      />
                  </div>
              
              <h3 className='pupservation-header'>Who's coming?</h3>
              <select className='listOfPups' name='pupList'>
                <option value="">Select a Pup</option>
                {dropPups}
              </select>

              <h3 className='pupservation-header'>Services:</h3>
              <select className='listOfServices' name='serviceList'>
                <option value='Grooming'>Grooming</option>
                <option value='Vet'>Vet</option>
                <option value='Daycare'>Daycare</option>
                <option value='Visiting'>Office Visit</option>
              </select>

              <section className='note'>
                <label>Notes</label>
                <input type='text' name='note' />
              </section>
              
              <button 
                type='submit' 
                className='pupservationConfirm-container' 
                >Submit</button>
          </form>
        </div>
        </div>
      );
    }
  }

export default PupservationPage;
