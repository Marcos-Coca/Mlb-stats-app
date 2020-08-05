import { useContext, useEffect, useState } from 'react'
import GamesContext from '../context/GamesContext'
import getSchedulesGames from '../services/getSchedulesGames'

export default function useGames(date) {
  const { games, setGames } = useContext(GamesContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!games[date]) {
      setLoading(true)
      searchGames()
    }
  }, [date])

  async function searchGames() {
    try {
      const schedulesGames = await getSchedulesGames(date)
      setGames(gamesCached => ({ ...gamesCached, [date]: schedulesGames }))
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  return { schedulesGames: games[date] || [], searchGames, loading, error }
}
