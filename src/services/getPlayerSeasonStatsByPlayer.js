import requestInterceptor from '../utils/requestInterceptor'

export default function getPlayerSeasonStatsByPlayer(season, player) {
  return requestInterceptor(
    `stats/json/PlayerSeasonStatsByPlayer/${season}/${player}`
  )
    .then(res => res)
    .catch(err => {})
}
