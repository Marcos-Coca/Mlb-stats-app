import { API_KEY } from '../utils/apiKey'

export default function anyGameInProgress() {
  return fetch(
    `https://api.sportsdata.io/v3/mlb/scores/json/AreAnyGamesInProgress?key=${API_KEY}`
  ).then(res => res.json())
}
