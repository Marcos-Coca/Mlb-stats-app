import { useState, useEffect } from 'react'

import getPlayer from 'Services/getPlayer'
import getPlayerSeasonStatsByPlayer from 'Services/getPlayerSeasonStatsByPlayer'

export default function usePlayer({ playerID, season }) {
  const [player, setPlayer] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)

    if (playerID && season) {
      setLoading(true)
      const playerData = getPlayer(playerID)
      const playerStats = getPlayerSeasonStatsByPlayer(season, playerID)

      Promise.all([playerData, playerStats])
        .then(playerData =>
          playerData.reduce((all, current) => ({ ...all, ...current }), {})
        )
        .then(setPlayer)
        .then(() => setLoading(false))
    } else {
      setPlayer(null)
    }
  }, [playerID, season])

  return [player, loading]
}
