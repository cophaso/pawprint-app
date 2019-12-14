import React from 'react'
import {Link} from 'react-router-dom'
import './LoginBar.css'

export default function LoginBar(){
    return(
        <div className='loginBar-container'>
            <Link className='loginBar-link' to='/login'>Login</Link>
        </div>
    )
}