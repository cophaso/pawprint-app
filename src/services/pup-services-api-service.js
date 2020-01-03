import config from '../config'
import TokenService from './token-service'

const PupServicesApiService = {
  getPupServices(){
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
  getPupService(pupId){
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
  postPupService({ appt_date, service_type, note, pup_id }) {
    return fetch(`${config.API_ENDPOINT}/pup-services`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ appt_date, service_type, note, pup_id }),
    })
      .then(res => res.json())
  }
}

export default PupServicesApiService