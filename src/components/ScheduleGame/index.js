import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import useTeams from '../../hooks/useTeams'

import TeamInfo from '../TeamInfo'
import GameProgress from '../GameProgress'
import { Container } from './styles'

export default function ScheduleGame({ game }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const [teams, setTeams] = useState([])

  const homeTeam = useTeams(game.HomeTeamID)
  const awayTeam = useTeams(game.AwayTeamID)

  useEffect(() => {
    setTeams([
      Object.assign(awayTeam, { runs: game.AwayTeamRuns }),
      Object.assign(homeTeam, { runs: game.HomeTeamRuns }),
    ])
  }, [homeTeam, awayTeam])

  return (
    <Container>
      <GameProgress game={game} showAll={isDesktop} />
      {teams.map(team => (
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
