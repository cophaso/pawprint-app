import React from 'react'
import './UsersPup.css'

export default function UsersPup(props){
    return (
        <>
            <li>
                <img src={props.img} alt='placeholder pup' />
                <p>{props.pup_name}</p>
            </li>
        </>
    )
}