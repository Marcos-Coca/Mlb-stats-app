import { API_KEY, API_URL } from '../utils/apiKey'

export default function getPlayerSeasonStatsByPlayer(season, player) {
  return fetch(
    `${API_URL}/stats/json/PlayerSeasonStatsByPlayer/${season}/${player}?key=${API_KEY}`
  )
    .then(res => res.json())
    .catch(err => {})
}
