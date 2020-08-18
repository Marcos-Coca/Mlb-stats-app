import { API_KEY, API_URL } from '../utils/apiKey'

export default function anyGameInProgress() {
  return fetch(
    `${API_URL}/scores/json/AreAnyGamesInProgress?key=${API_KEY}`
  ).then(res => res.json())
}
