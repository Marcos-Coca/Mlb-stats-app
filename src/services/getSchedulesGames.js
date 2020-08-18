import { API_KEY, API_URL } from '../utils/apiKey'

export default function getSchedulesGames(date) {
  return fetch(
    `${API_URL}/scores/json/GamesByDate/${date}?key=${API_KEY}`
  ).then(res => res.json())
}
