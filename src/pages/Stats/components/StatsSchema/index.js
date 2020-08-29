import React from 'react'
import { useMediaQuery } from 'react-responsive'

import SortByFilter from './SortByFilter'
import useStatsFilters from '../../hooks/useStatsFilters'
import { PITCHING_STATS, HITTING_STATS } from 'Utils/stats'

import { Tr } from './styles'

export default function StatsSchema() {
  const { filters } = useStatsFilters()
  const tablet = useMediaQuery({ minWidth: 500 })
  const stats = []

  const statsSchema =
    filters.groupBy === 'Hitting' ? HITTING_STATS : PITCHING_STATS

  for (let stat in statsSchema) {
    stats.push(
      <SortByFilter key={stat} text={stat} value={statsSchema[stat]} />
    )
  }
  return (
    <thead>
      <Tr>
        {tablet &&
          (filters.requiredStats === 'Teams' ? (
            <>
              <th>TEAM</th>
              <th>LEAGUE</th>
            </>
          ) : (
            <>
              <th>PLAYER</th>
              <th>TEAM</th>
            </>
          ))}
        {stats}
      </Tr>
    </thead>
  )
}
