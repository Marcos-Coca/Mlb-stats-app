import requestInterceptor from '../utils/requestInterceptor'

export default function getTeamsSeasonStats(season) {
  return requestInterceptor(`scores/json/TeamSeasonStats/${season}`)
}
