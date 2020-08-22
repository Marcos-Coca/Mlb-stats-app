import { useState, useEffect } from 'react'

import getPlayerSeasonStats from 'Services/getPlayerSeasonStats'
import getTeamsSeasonStats from 'Services/getTeamsSeasonStats'

export default function useStats({ requiredStats, sortBy, season }) {
  const [stats, setStats] = useState([])

  const sortStats = unorderedStats =>
    unorderedStats.sort((a, b) => b[sortBy] - a[sortBy])

  useEffect(() => {
    const orderedStats = sortStats(stats)
    setStats(orderedStats)
  }, [sortBy])

  useEffect(() => {
    requiredStats === 'Teams'
      ? getTeamsSeasonStats(season).then(sortStats).then(setStats)
      : getPlayerSeasonStats(season).then(sortStats).then(setStats)
  }, [season])

  return stats
}
