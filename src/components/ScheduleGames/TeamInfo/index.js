import React from 'react'

import useTeams from 'Hooks/useTeams'

import { TeamLogo, Container, Info } from './styles'

export default function TeamInfo({ teamID, isDesktop, runs }) {
  const { team } = useTeams(teamID)
  return (
    <Container>
      <Info>
        <TeamLogo src={team.WikipediaWordMarkUrl || team.WikipediaLogoUrl} />
        {isDesktop ? <span>{team.Name}</span> : <span>{team.Key}</span>}
      </Info>
      <div>{runs}</div>
    </Container>
  )
}
