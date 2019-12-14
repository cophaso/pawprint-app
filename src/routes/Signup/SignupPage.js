import React, { Component }  from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import NavBar from '../../components/NavBar/NavBar'
import './SignupPage.css'

export default class SignupPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    handleSignupSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/home'
      history.push(destination)
      window.location.reload()
    }
  
    render() {
      return (
        <>
        <NavBar />
        <div className='SignupPage--container'>
          
          <div className='SignupPage'>
            <h2>Sign Up</h2>
            <SignupForm
              onSignupSuccess={this.handleSignupSuccess}
            />
          </div>
        </div>
        </>
      )
    }
  }