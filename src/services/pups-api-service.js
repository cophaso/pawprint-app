import config from '../config'
import TokenService from './token-service'

const PupsApiService = {
  getPups(){
    return fetch(`${config.API_ENDPOINT}/pups`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPup(pupId){
    return fetch(`${config.API_ENDPOINT}/pups/${pupId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postPups({ email, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
  }
}

export default PupsApiService