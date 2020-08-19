import React from 'react'

import useTeams from 'Hooks/useTeams'
import useTeamStats from 'Hooks/useTeamStats'

import { Tr, Team } from './styles'

export default function TeamStats({ teamID }) {
  const { team } = useTeams(teamID)
  const teamStats = useTeamStats(teamID)

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
    </Tr>
  )
}
