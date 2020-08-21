import { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'

import GamesContext from '../context/GamesContext'
import getSchedulesGames from 'Services/getSchedulesGames'

export default function useGames(date) {
  const formatDate = format(date, 'yyyy-MMM-dd')
  const { games, setGames } = useContext(GamesContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!games[formatDate]) {
      setLoading(true)
      searchGames()
    }
  }, [formatDate])

  async function searchGames() {
    try {
      const schedulesGames = await getSchedulesGames(formatDate)
      setGames(gamesCached => ({
        ...gamesCached,
        [formatDate]: schedulesGames,
      }))
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  return {
    schedulesGames: games[formatDate] || [],
    searchGames,
    loading,
    error,
  }
}
