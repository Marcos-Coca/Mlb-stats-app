import requestInterceptor from '../utils/requestInterceptor'

export default function getPlayerSeasonStats(season) {
  return requestInterceptor(`stats/json/PlayerSeasonStats/${season}`)
}
