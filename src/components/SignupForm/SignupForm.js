import React, { Component } from 'react'

export default class SignupForm extends Component {

  render() {
    return (
      <form className='SignupForm'>
        <div className='email'>
          <label htmlfor="email">Email</label>
          <input type="text" name='email' id='email' />
        </div>
        <div className="password">
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
