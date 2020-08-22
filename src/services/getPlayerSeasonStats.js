import { API_KEY, API_URL } from '../utils/apiKey'

export default function getPlayerSeasonStats(season) {
  return fetch(
    `${API_URL}/stats/json/PlayerSeasonStats/${season}?key=${API_KEY}`
  ).then(res => res.json())
}
