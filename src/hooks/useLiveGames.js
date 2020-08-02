import { useMemo, useEffect } from 'react'

export default function useLiveGames() {
  const today = useMemo(() => date, [])
  const [games, setGames] = useState([])

  function setGamesStatus() {
    return getSchedulesGames(today).then(setGames)
  }
  useEffect(() => {
    const interval = setInterval(setGamesStatus, 10000 * 60 * 3)
    return () => clearInterval(interval)
  }, [])

  return { games }
}
