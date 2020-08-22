import React from 'react'

import useTeams from 'Hooks/useTeams'

import { Tr, Team } from './styles'
import FullTeamStats from './FullTeamStats'

export default function TeamStats({ teamID, teamStats, full }) {
  const { team, loading } = useTeams(teamID)

  if (loading) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    )
  }

  return (
    <Tr>
      <td>
        <Team>
          <span>
            <img src={team.WikipediaWordMarkUrl} />
          </span>
          <span>{team.Key}</span>
        </Team>
      </td>
      <td>{teamStats.Wins}</td>
      <td>{teamStats.Losses}</td>
      <td>.{Math.round(teamStats.Percentage * 1000)}</td>
      <td>{teamStats.GamesBehind === 0 ? '-' : teamStats.GamesBehind}</td>
      {full && <FullTeamStats stats={teamStats} />}
    </Tr>
  )
}
