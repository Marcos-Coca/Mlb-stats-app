import { API_KEY, API_URL } from '../utils/apiKey'

export default function getNews() {
  return fetch(`${API_URL}/scores/json/News?key=${API_KEY}`).then(res =>
    res.json()
  )
}
