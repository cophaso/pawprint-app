import React, { Component } from 'react'

export default class LoginForm extends Component {

  render() {
    return (
      <form className='LoginForm'>
        <div className='email'>
          <label for="email">Email</label>
          <input type="text" name='email' id='email' />
        </div>
        <div className="password">
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <div className="signup-btn">
          <button>Sign Up?</button>
        </div>
        <button type='submit'>Login</button>
      </form>
    )
  }
}
