import requestInterceptor from '../utils/requestInterceptor'

export default function getTeams() {
  return requestInterceptor(`scores/json/teams`)
}
