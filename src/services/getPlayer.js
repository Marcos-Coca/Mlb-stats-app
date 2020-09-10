import requestInterceptor from '../utils/requestInterceptor'

export default function getPlayer(id) {
  return requestInterceptor(`scores/json/Player/${id}`)
}
