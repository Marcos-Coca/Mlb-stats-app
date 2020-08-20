import React, { useState, useEffect } from 'react'

import TeamStats from 'Components/TeamsRanking/TeamStats'
import getTemasStanding from 'Services/getTeamsStanding'

import { Table, Thead, Tbody, Th } from './styles'

export default function TeamStanding({ division, league, season }) {
  const [teamsStanding, setTeamsStanding] = useState([])

  useEffect(() => {
    getTemasStanding(season).then(setTeamsStanding)
  }, [season])

  return (
    <Table>
      <Thead>
        <tr>
          <Th>
            <span>{division}</span>
          </Th>
          <Th>
            <span>W</span>
          </Th>
          <Th>
            <span>L</span>
          </Th>
          <Th>
            <span>%</span>
          </Th>
          <Th>
            <span>GB</span>
          </Th>
        </tr>
      </Thead>
      <Tbody>
        {teamsStanding.map(
          ({ Division, League, TeamID }) =>
            Division === division &&
            League === league && (
              <TeamStats
                key={TeamID}
                teamsStanding={teamsStanding}
                teamID={TeamID}
              />
            )
        )}
      </Tbody>
    </Table>
  )
}
