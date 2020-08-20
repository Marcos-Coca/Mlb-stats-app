import React from 'react'

import useTeams from 'Hooks/useTeams'

import { Tr, Team } from './styles'

const searchStats = (teamID, teamsStanding) =>
  teamsStanding.find(team => team.TeamID === teamID) || {}

export default function TeamStats({ teamID, teamsStanding }) {
  const { team } = useTeams(teamID)
  const teamStats = searchStats(teamID, teamsStanding)

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
