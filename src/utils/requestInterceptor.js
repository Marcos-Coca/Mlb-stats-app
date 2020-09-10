import { API_KEYS } from './apiKeys'

function getApiKey() {
  const min = 0
  const max = 33
  const number = Math.floor(Math.random() * (max - min) + min)
  return API_KEYS[number]
}

export default function requestInterceptor(url) {
  const apiUrl = `https://api.sportsdata.io/v3/mlb`
  const apiKey = getApiKey()
  const requestUrl = `${apiUrl}/${url}?key=${apiKey}`

  const response = fetch(requestUrl).then(res =>
    res.status === 403 ? requestInterceptor(url) : res.json()
  )

  return response
}
