import { API_KEY, API_URL } from '../utils/apiKey'

export default function getTeams() {
  return fetch(`${API_URL}/scores/json/teams?key=${API_KEY}`).then(data =>
    data.json()
  )
}
