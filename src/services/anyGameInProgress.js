import requestInterceptor from '../utils/requestInterceptor'

export default function anyGameInProgress() {
  return requestInterceptor('scores/json/AreAnyGamesInProgress')
}
