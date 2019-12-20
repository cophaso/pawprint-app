import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignupForm extends Component {

  render() {
    return (
      <form className='SignupForm'>
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
