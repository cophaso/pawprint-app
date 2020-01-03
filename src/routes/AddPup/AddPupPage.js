import React, { Component } from 'react';
import AddPupForm from '../../components/AddPupForm/AddPupForm';
import NavBar from '../../components/NavBar/NavBar';
import './AddPupPage.css';

export default class AddPupPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSubmitSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/yourpups'
    history.push(destination)
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='AddPupPage--container'>
          <div className='AddPupPage'>
            <h2>Add Your Pup</h2>
            <AddPupForm 
              onSubmitSuccess={this.handleSubmitSuccess}/>
          </div>
        </div>
      </>
    )
  }
}