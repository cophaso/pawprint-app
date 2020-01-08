import React, { Component } from 'react'
import PupsApiService from '../../services/pups-api-service';

export default class AddPupForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
    pups: [],
    error: null
  };
 }

     handleSubmit = ev =>{
      ev.preventDefault()
  
      this.setState({error: null})

      const { pup_name, breed, allergies, hobbies, image_url} = ev.target

      let img_url;

      if (image_url.value === ''){
        img_url = 'https://static.thenounproject.com/png/875858-200.png'
      }
      else{
        img_url = image_url.value
      }

      if(pup_name.value === ''){
        this.setState({error: 'Please add a name for the pup'})
      }
      else{
        PupsApiService.postPups({
          pup_name: pup_name.value,
          breed: breed.value,
          allergies: allergies.value,
          hobbies: hobbies.value,
          parent_id: localStorage.getItem('user_id'),
          image_url: img_url
        })
        .then(() => {
            pup_name.value = ''
            breed.value = ''
            allergies.value = ''
            hobbies.value = ''
            image_url.value = ''
            this.props.onSubmitSuccess()

          })
        .catch(res => {
          throw new Error(res.error);
        })
      }
    }

  
  render() {
    const { error } = this.state;
    return (
      <form className='AddPupForm'
      onSubmit={e => this.handleSubmit(e)}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <section className='pup-name'>
          <label>Pup's Name</label>
          <input type='text' name='pup_name' />
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
        <section className='image_url'>
          <label>Pup image URL (jpg or png)</label>
          <input type="text" name='image_url' />
        </section>
        <button 
          type='submit' 
          className='savePupButton' 
          >Save Pup</button>
      </form>
    )
  }
}