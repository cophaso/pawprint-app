import React, { Component }  from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import './LoginPage.css'

export default class LoginPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/home'
      history.push(destination)
    }
  
    render() {
      return (
        <>
        <NavBar />
        <div className='LoginPage--container'>
          <div className='LoginPage'>
            <h2>Login</h2>
            <LoginForm
              onLoginSuccess={this.handleLoginSuccess}
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