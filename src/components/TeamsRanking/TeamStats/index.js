import React from 'react'

import useTeams from 'Hooks/useTeams'
import useTeamStats from 'Hooks/useTeamStats'

export default function TeamStats({ teamID }) {
  const { team } = useTeams(teamID)
  const teamStats = useTeamStats(teamID)

  return (
    <tr>
      <td>
        <span>
          <img
            height="20px"
            width="20px"
            src={team.WikipediaLogoUrl}
            alt={team.Name}
          />
          <span>{team.Key}</span>
        </span>
      </td>
      <td>{teamStats.Wins}</td>
      <td>{teamStats.Losses}</td>
      <td>.{Math.round(teamStats.Percentage * 1000)}</td>
      <td>{teamStats.GamesBehind === 0 ? '--' : teamStats.GamesBehind}</td>
    </tr>
  )
}
