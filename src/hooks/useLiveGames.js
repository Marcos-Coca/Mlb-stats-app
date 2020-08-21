import { useEffect, useRef } from 'react'
import { format } from 'date-fns'

import anyGameInProgress from 'Services/anyGameInProgress'
import useGames from 'Hooks/useGames'

export default function useLiveGames() {
  const today = format(new Date(), 'yyyy-MMM-d')
  const { schedulesGames, searchGames } = useGames(new Date())
  const interval = useRef(false)

  useEffect(() => {
    anyGameInProgress().then(
      isPlaying =>
        isPlaying &&
        (interval.current = setInterval(searchGames, 1000 * 60 * 3))
    )
    return () => clearInterval(interval.current)
  }, [])

  return { livesGames: schedulesGames, today }
}
