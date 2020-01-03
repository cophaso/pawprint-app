import config from '../config'

const PupServicesApiService = {
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