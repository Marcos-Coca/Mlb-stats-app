import requestInterceptor from '../utils/requestInterceptor'

export default function getSchedulesGames(date) {
  return requestInterceptor(`scores/json/GamesByDate/${date}`)
}
