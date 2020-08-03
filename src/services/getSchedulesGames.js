import { API_KEY } from '../utils/apiKey'

export default function getSchedulesGames(date) {
  return fetch(
    `https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/${date}?key=${API_KEY}`
  ).then(data => data.json())
}
