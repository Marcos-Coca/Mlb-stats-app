import React from 'react'

import TeamStats from 'Components/TeamsStanding/TeamStats'
import StatsSchema from 'Components/TeamsStanding/StatsSchema'

import { Table, Tbody, Thead } from './styles'

export default function TeamsStanding({
  title,
  isValidTeam,
  full,
  teamsStanding,
}) {
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
