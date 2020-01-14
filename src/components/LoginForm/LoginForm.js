import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev =>{
    ev.preventDefault()

    this.setState({error: null})

    const {email, password} = ev.target

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
    .then(res => {
      if(typeof res.authToken !== 'undefined') {
        localStorage.setItem('user_id', res.id)
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      }
      else {
        this.setState({error: res.error})
      }
    })
    .catch(res => {
      throw new Error(res.error);
    })
  };

  render() {
    const { error } = this.state;
    return (
      <form 
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='email'>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' id='email' />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <div className="signup-bt">
        <NavLink to='/signup'><button type='button' className="loginbuttons">Sign Up?</button></NavLink>
        </div>
        <button type='submit' className="loginbuttons">Submit</button>
      </form>
    )
  }
}
