import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import TeamInfo from 'Components/ScheduleGames/TeamInfo'
import GameProgress from 'Components/ScheduleGames/GameProgress'

import { Container, Teams } from './styles'

export default function ScheduleGame({ game }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const { AwayTeamID, HomeTeamID, HomeTeamRuns, AwayTeamRuns } = game
  const [teams] = useState([
    { teamID: AwayTeamID, runs: AwayTeamRuns },
    { teamID: HomeTeamID, runs: HomeTeamRuns },
  ])

  return (
    <Container>
      <GameProgress game={game} showAll={isDesktop} />
      <Teams>
        {teams.map(({ teamID, runs }) => (
          <TeamInfo
            key={teamID}
            teamID={teamID}
            runs={runs}
            isDesktop={isDesktop}
          />
        ))}
      </Teams>
    </Container>
  )
}
