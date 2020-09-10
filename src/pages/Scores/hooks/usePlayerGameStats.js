import { useState, useEffect } from 'react'

import getPlayerGameStats from 'Services/getPlayerGameStats'

export default function usePlayerGameStats({ playerID, date }) {
  const [stats, setStats] = useState({})

  useEffect(() => {
    getPlayerGameStats(date, playerID).then(setStats)
  }, [playerID, date])

  return stats[0] || {}
}
