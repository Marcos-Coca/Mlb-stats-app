import React from 'react'
import { useMediaQuery } from 'react-responsive'

import StatsTableMobile from './StatsTableMobile'

import useTeams from 'Hooks/useTeams'
import useStats from '../../hooks/useStats'
import useStatsFilters from '../../hooks/useStatsFilters'

import { Header } from './styles'

export default function StatsTable() {
  const stats = useStats()
  const { teams, loading } = useTeams()
  const {
    filters: { sortBy, requiredStats },
  } = useStatsFilters()

  const tablet = useMediaQuery({ minWidth: 768 })
  const title = sortBy.replace(/([A-Z])/g, ' $1')

  return (
    <>
      <Header>{title}</Header>
      <ul>
        {stats.map(stat => (
          <StatsTableMobile
            key={stat.StatID}
            teams={teams}
            stats={stat}
            sortBy={sortBy}
            requiredStats={requiredStats}
          />
        ))}
      </ul>
    </>
  )
}
