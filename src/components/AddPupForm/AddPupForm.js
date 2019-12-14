import React, { Component } from 'react'

export default class AddPupForm extends Component {
  render() {
    return (
      <form className='AddPupForm'>
        <section className='pup-name'>
          <label>Pup's Name</label>
          <input type='text' name='pup-name' />
        </section>
        <section className='breed'>
          <label>Breed</label>
          <input type='text' name='breed' />
        </section>
        <section className='allergies'>
          <label>Allergies</label>
          <input type='text' name='allergies' />
        </section>
        <section className='hobbies'>
          <label>Hobbies</label>
          <input type='text' name='hobbies' />
        </section>
        <section className='parent-name'>
          <label>Parent Name</label>
          <input type='text' name='parent-name' />
        </section>
        <section className='pup-image'>
          <label>Add an Image of Your Pup</label>
          <input type="file" name="pic" accept="image/*" />
        </section>
        <button type='submit'>Save Pup</button>
      </form>
    )
  }
}