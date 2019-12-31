import React from 'react'
import './UsersPupsList.css'
import UsersPup from '../UsersPup/UsersPup'

export default class UsersPupsList extends React.Component {
  render() {
    // const pups = this.props.pups.map((pup, i) => <UsersPup {...pup} key={i} />)
    this.props.pups.map(pup => console.log(pup))
    return (
      <>
        <ul>
          {this.props.pups.map((pup, i) => <UsersPup {...pup} key={i} />)}
        </ul>
      </>
    )
  }
}

UsersPupsList.defaultProps = {
  pups: [],
}