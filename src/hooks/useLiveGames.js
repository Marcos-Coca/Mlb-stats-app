import { useEffect, useRef } from 'react'
import useDate from './useDate'
import anyGameInProgress from '../services/anyGameInProgress'
import useGames from './useGames'

export default function useLiveGames() {
  const [today] = useDate({ dateFormat: 'YYYY-MMM-D' })
  const { schedulesGames, searchGames } = useGames(today)
  const interval = useRef(false)

  useEffect(() => {
    anyGameInProgress()
      .then(
        isPlaying =>
          isPlaying &&
          (interval.current = setInterval(searchGames, 1000 * 60 * 3))
      )
      .catch(err => console.log(err))
    return () => clearInterval(interval.current)
  }, [])

  return { livesGames: schedulesGames, today }
}
