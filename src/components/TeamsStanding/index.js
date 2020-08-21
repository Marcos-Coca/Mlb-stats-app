import React, { useState, useEffect } from 'react'

import TeamStats from 'Components/TeamsStanding/TeamStats'
import StatsSchema from 'Components/TeamsStanding/StatsSchema'
import getTemasStanding from 'Services/getTeamsStanding'

import { Table, Tbody, Thead } from './styles'

export default function TeamsStanding({
  title,
  isValidTeam,
  full,
  season = '2020',
}) {
  const [teamsStanding, setTeamsStanding] = useState([])

  useEffect(() => {
    getTemasStanding(season).then(setTeamsStanding)
  }, [season])

  return (
    <Table>
      <Thead>
        <StatsSchema full={full} title={title} />
      </Thead>
      <Tbody>
        {teamsStanding.map(
          team =>
            isValidTeam(team) && (
              <TeamStats
                key={team.TeamID}
                teamID={team.TeamID}
                teamStats={team}
                full={full}
              />
            )
        )}
      </Tbody>
    </Table>
  )
}
