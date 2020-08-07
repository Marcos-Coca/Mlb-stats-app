import React from 'react'
import { useMediaQuery } from 'react-responsive'

import TeamInfo from '../TeamInfo'
import GameProgress from '../GameProgress'
import { Container } from './styles'

export default function ScheduleGame({ liveGames, teams, game }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <Container>
      <GameProgress game={game} breakPoint={isDesktop} />
      {teams &&
        teams.map(team => (
          <TeamInfo
            key={team.TeamID}
            image={team.WikipediaWordMarkUrl}
            Name={isDesktop && team.Name}
            Key={!isDesktop && team.Key}
            runs={team.runs}
          />
        ))}
    </Container>
  )
}
