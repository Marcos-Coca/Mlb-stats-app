import React from 'react'
import { useMediaQuery } from 'react-responsive'

import StatsTableMobile from './StatsTableMobile'
import StatsTableDesktop from './StatsTableDesktop'

import useStats from '../../hooks/useStats'
import useStatsFilters from '../../hooks/useStatsFilters'

export default function StatsTable() {
  const stats = useStats()
  const { filters } = useStatsFilters()

  const tablet = useMediaQuery({ maxWidth: 500 })

  return (
    <tbody>
      {tablet ? (
        <StatsTableMobile sortBy={filters.sortBy} stats={stats} />
      ) : (
        <StatsTableDesktop stats={stats} />
      )}
    </tbody>
  )
}
