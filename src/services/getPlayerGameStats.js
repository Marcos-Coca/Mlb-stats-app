import { API_KEY, API_URL } from '../utils/apiKey'

export default function getPlayerSeasonStats(date, playerID) {
  return fetch(
    `${API_URL}/stats/json/PlayerGameStatsByPlayer/${date}/${playerID}?key=${API_KEY}`
  ).then(res => res.json())
}
