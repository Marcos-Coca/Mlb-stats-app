import { useState, useEffect } from 'react'

import useStatsFilters from '../hooks/useStatsFilters'
import getPlayerSeasonStats from 'Services/getPlayerSeasonStats'
import getTeamsSeasonStats from 'Services/getTeamsSeasonStats'

export default function useStats() {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(false)
  const { filters } = useStatsFilters()
  const { sortBy, requiredStats, season } = filters
  const userStats = stats[requiredStats]

  const sortStats = (unorderedStats = [], desc) =>
    unorderedStats.sort((a, b) => {
      if (!a[sortBy]) return 1
      if (!b[sortBy]) return -1

      return desc ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
    })

  const setState = value =>
    setStats(state => ({ ...state, [requiredStats]: value }))

  useEffect(() => {
    let orderedStats
    sortBy === 'EarnedRunAverage' ||
    sortBy === 'PitchingBattingAverageAgainst' ||
    sortBy === 'WalksHitsPerInningsPitched'
      ? (orderedStats = sortStats(userStats, true))
      : (orderedStats = sortStats(userStats))

    setState(orderedStats)
  }, [sortBy])

  useEffect(() => {
    if (!userStats) {
      setLoading(true)
      requiredStats === 'Teams'
        ? getTeamsSeasonStats(season)
            .then(sortStats)
            .then(setState)
            .then(() => setLoading(false))
        : getPlayerSeasonStats(season)
            .then(sortStats)
            .then(setState)
            .then(() => setLoading(false))
    }
  }, [season, requiredStats])

  return { stats: userStats || [], loading }
}
