import { API_URL, API_KEY } from '../utils/apiKey'

export default function getTemasStanding(season) {
  return fetch(
    `${API_URL}/scores/json/Standings/${season}?key=${API_KEY} `
  ).then(res => res.json())
}
