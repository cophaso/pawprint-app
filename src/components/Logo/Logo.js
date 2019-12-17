import React from 'react';
import './Logo.css';
import LogoImg from '../../assets/images/pawprint-logo.png';
import { NavLink } from 'react-router-dom';

export default function Logo(){
    return (
      <NavLink to='/' className='logo'>
        <img src={LogoImg} alt='logo' />
        <div className='logo-title'>
          <h1>PawPrint</h1>
          <p>Keeping up with the office pups</p>
        </div>
      </NavLink>
    )
}
