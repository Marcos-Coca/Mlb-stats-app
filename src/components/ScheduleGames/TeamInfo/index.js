import React from 'react'

import useTeams from 'Hooks/useTeams'

import { TeamLogo, Container, Info } from './styles'

export default function TeamInfo({ teamID, isDesktop, runs }) {
  const { team, loading } = useTeams(teamID)
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <Info>
        <TeamLogo src={team.WikipediaWordMarkUrl} />
        {isDesktop ? <span>{team.Name}</span> : <span>{team.Key}</span>}
      </Info>
      <div>{runs}</div>
    </Container>
  )
}
