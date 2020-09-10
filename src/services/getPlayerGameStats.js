import requestInterceptor from '../utils/requestInterceptor'

export default function getPlayerSeasonStats(date, playerID) {
  return requestInterceptor(
    `stats/json/PlayerGameStatsByPlayer/${date}/${playerID}`
  )
}
