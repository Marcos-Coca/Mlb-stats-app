import getSchedulesGames from '../services/getSchedulesGames'
import { useEffect, useState, useContext, useMemo } from 'react'
import GamesContext from '../context/GamesContext'

export default function useScheduleGames(date) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { games, setGames } = useContext(GamesContext)

  useEffect(() => {
    if (!games[date]) {
      getSchedulesGames(date).then(game => setGames({ ...games, [date]: game }))
    }
  }, [date])

  return { loading, error, games: games[date] || [] }
}
