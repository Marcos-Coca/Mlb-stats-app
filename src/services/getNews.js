import requestInterceptor from '../utils/requestInterceptor'

export default function getNews() {
  return requestInterceptor('scores/json/News')
}
