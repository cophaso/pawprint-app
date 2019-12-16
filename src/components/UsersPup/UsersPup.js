import React from 'react'
import './UsersPup.css'
import Lab from '../../assets/images/lab.jpg'

export default function UsersPup() {
  return (
    <>
      <li>
        <img src={Lab} alt='placeholder pup' />
        <p>Doggo's name</p>
      </li>
    </>
  )
}