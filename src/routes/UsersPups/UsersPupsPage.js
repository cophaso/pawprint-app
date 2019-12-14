import React from 'react'
import './UsersPupsPage.css'
import NavBar from '../../components/NavBar/NavBar'
import UsersPupsList from '../../components/UsersPupsList/UsersPupsList'

export default class UsersPupsPage extends React.Component{
    render(){
        return (
            <div className='usersPupsPage-container'>
                <NavBar />
                <main role='main'>
                    <section className='usersPupsList-section'>
                        <h2>Your Pups</h2>
                        <UsersPupsList pups={this.props.pups} />
                    </section>
                </main>
                <footer>
                    <button>Add a Pup</button>
                </footer>
            </div>
        )
    }
}