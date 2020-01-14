import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default class SignupForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, email, password } = ev.target
    this.setState({ error: null })

    AuthApiService.postUser({
      name: name.value,
      email: email.value,
      password: password.value
    })
    .then(res => {
      if(typeof res.id !== 'undefined') {
        AuthApiService.postLogin({
          email: res.email,
          password: password.value,
        })
        .then(res => {
            localStorage.setItem('user_id', res.id)
            TokenService.saveAuthToken(res.authToken)
            name.value = ''
            email.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
        })

      }
      else {
        this.setState({error: res.error})
      }
    })
    .catch(res => {
      throw new Error(res.error);
    })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className='SignupForm'
        onSubmit={this.handleSubmit}
        >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='name'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' />
        </div>
        <div className='email'>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' id='email' />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <NavLink to='/login'><button type='button' className="loginbuttons">Login?</button></NavLink>
        <button type='submit' className="signUpButtons">Submit</button>
      </form>
    )
  }
}
