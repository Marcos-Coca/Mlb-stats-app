import { API_KEY, API_URL } from '../utils/apiKey'

export default function getTeamsSeasonStats(season) {
  return fetch(
    `${API_URL}/scores/json/TeamSeasonStats/${season}?key=${API_KEY}`
  ).then(res => res.json())
}
