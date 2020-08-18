import React from 'react'
import useTeams from 'Hooks/useTeams'

export default function TeamRank({ teamID }) {
  const { team } = useTeams(teamID)

  return (
    <div>
      <img src={team.WikipediaWordMarkUrl} alt={team.Name} />
      <span>{team.Key}</span>
    </div>
  )
}
