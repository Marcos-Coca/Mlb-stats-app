import React from 'react'
import { useMediaQuery } from 'react-responsive'

import useTeams from 'Hooks/useTeams'
import useNearScreen from 'Hooks/useNearScreen'
import useStatsFilters from '../../../../hooks/useStatsFilters'

import setStats from './setStats'

import { Tr } from './styles'

export default function Stats({ stats }) {
  const { filters } = useStatsFilters()
  const [show, element] = useNearScreen({})
  const { team } = useTeams(stats.TeamID)

  const isDeskTop = useMediaQuery({ minWidth: 1024 })
  const teamName = isDeskTop ? stats.Name : team.Name

  const resultStats = setStats(stats, filters)

  return (
    <Tr ref={element}>
      {show && (
        <>
          {filters.requiredStats === 'Teams' ? (
            <>
              <td>{teamName}</td>
              <td>{team.League}</td>
            </>
          ) : (
            <>
              <td>{stats.Name}</td>
              <td>{stats.Team}</td>
            </>
          )}

          {resultStats}
        </>
      )}
    </Tr>
  )
}
