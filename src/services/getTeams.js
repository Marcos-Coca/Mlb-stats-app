import { API_KEY } from '../utils/apiKey'

export default function getTeams() {
  return fetch(
    `https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${API_KEY}`
  )
    .then(data => data.json())
    .catch(err => console.log(err))
}
