import requestInterceptor from '../utils/requestInterceptor'

export default function getTemasStanding(season) {
  return requestInterceptor(`scores/json/Standings/${season}`)
}
