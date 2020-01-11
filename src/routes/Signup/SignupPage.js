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

    handleRegistrationSuccess = user => {
      const { history } = this.props
      history.push('/home')
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
              onRegistrationSuccess={this.handleRegistrationSuccess}
            />
            <p>Demo User: <br />
                email: user1@test.com <br />
                password: Password1!</p>
          </div>
        </div>
        </>
      )
    }
  }