import React from 'react'
import './UsersPup.css'
import { Link } from 'react-router-dom'

export default function UsersPup(props) {
  return (
    <>
      <li className='pups'> 
        <Link to={`/profile/${props.id}`} className='yourPup-link'>
          <img src={props.image_url} alt='placeholder pup' />
          <p >{props.pup_name}</p>
        </Link>
      </li>
    </>
  )
}