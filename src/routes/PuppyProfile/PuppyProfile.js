import React from 'react';
import {format} from 'date-fns';
import './PuppyProfile.css';
import NavBar from '../../components/NavBar/NavBar';
import PupsApiService from '../../services/pups-api-service';


class PuppyProfile extends React.Component {
    static defaultProps = {
        match: { params: {}, },
    }
    
    constructor(props) {
        super(props);
        this.state = {
          pup: [],
          services: []
        };
      }

    componentDidMount(){
        const pupId = this.props.match.params.pup_id
        console.log(pupId)
        PupsApiService.getPup(pupId)
            .then(pup =>{
                this.setState({pup: pup})
            })
        PupsApiService.getPupServices(pupId)
            .then(services =>{
                this.setState({services: services})
            })
    }

    render() {
        const {pup, services} = this.state

        return (
        <div>
            <NavBar />
            
        <section className="hero">
            <div className="centered">
                <div className="dogImage">
                    <img src={pup.image_url} className="profilePic" alt ='' />
                    <div className="dogName">{pup.pup_name}</div>
                </div>
            </div>
        </section>

        <section className="about">
            <h3 className='sectionTitle'>About:</h3>
                <ul className='aboutPup'>
                    <li>Breed: {pup.breed}</li>
                    <li>Allergies: {pup.allergies}</li>
                    <li>Hobbies: {pup.hobbies}</li>
                    <PupParent parent={pup.parent} />
                </ul>
        </section>

        <section className="visits">
            <h3 className='sectionTitle'>Office Visits:</h3>
                <ul className='aboutPup'>
                    <li>Tues, Dec. 23rd</li>
                    <li>Wed, Dec. 24th</li>
                    <li>Fri, Dec 28th</li>
                </ul>
        </section>

        <section className="services">
            <h3 className='sectionTitle'>Services:</h3>
                <PupServices services={services} />
        </section>
      
        </div>
      );
    }
}
  
function PupParent({parent = []}){
    return(
    <li key={parent.id}>Parent: {parent.user_name}</li>
    )
}

function PupServices({services = []}){
    return(
        <ul className='aboutPup'>
            {services.map(service =>
                <li key={service.id}>{format(new Date(service.date), 'iii, MMM dd')}: {service.service_type}</li>
            )}
        </ul>
    )
}
  
export default PuppyProfile;
