import React from 'react'
import './UsersPupsPage.css'
import NavBar from '../../components/NavBar/NavBar'
import UsersPupsList from '../../components/UsersPupsList/UsersPupsList'
import {Link} from 'react-router-dom'


export default class UsersPupsPage extends React.Component{
    render(){
        return (
            <div className="userspupPage">
            <NavBar />
                <div className='usersPupsPage-container'>
            
                    <section className='usersPupsList-section'>
                        <h3 className="yourPupSectionTitle">Your Pups</h3>
                        <UsersPupsList pups={this.props.pups} />
                    </section>
    
                <section className="yourPupBar">
                <Link className='yourPup-link' to='/addpup'>Add a Pup</Link>

                </section>
            </div>
            </div>
        )
    }
}