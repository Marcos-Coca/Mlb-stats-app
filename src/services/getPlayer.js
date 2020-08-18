import { API_URL, API_KEY } from '../utils/apiKey'

export default function getPlayer(id) {
  return fetch(`${API_URL}/scores/json/Player/${id}?key=${API_KEY}`).then(res =>
    res.json()
  )
}
