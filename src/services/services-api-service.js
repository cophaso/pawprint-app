import config from '../config'
import TokenService from './token-service'

const ServicesApiService = {
  getServices(){
    return fetch(`${config.API_ENDPOINT}/pup-services`, {
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
  postServices(pupId, services_type, note) {
    return fetch(`${config.API_ENDPOINT}/pup-services`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        pup_id: pupId, 
        services_type, 
        note
      }),
    })
      .then(res => res.json())
  }
}

export default ServicesApiService