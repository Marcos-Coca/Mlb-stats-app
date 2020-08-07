import React, { useState, useEffect } from 'react'
import ScheduleGame from '../ScheduleGame'
import getTeams from '../../services/getTeams'
import useLiveGames from '../../hooks/useLiveGames'
import useGames from '../../hooks/useGames'
import { List } from './styles'

function getTeamsGameInfo(teams, game) {
  const homeTeam = teams.find(team => team.TeamID === game.HomeTeamID)
  const awayTeam = teams.find(team => team.TeamID === game.AwayTeamID)

  return [
    { ...homeTeam, runs: game.HomeTeamRuns },
    { ...awayTeam, runs: game.HomeTeamRuns },
  ]
}

export default function ({ date }) {
  const [teams, setTeams] = useState(false)
  const { schedulesGames, loading, error } = useGames(date)
  useLiveGames()

  useEffect(function () {
    getTeams().then(setTeams)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) return <div>Error Cñ</div>

  return (
    <List>
      {schedulesGames.map(
        game =>
          teams && (
            <ScheduleGame
              teams={getTeamsGameInfo(teams, game)}
              game={game}
              key={game.GameID}
            />
          )
      )}
    </List>
  )
}
