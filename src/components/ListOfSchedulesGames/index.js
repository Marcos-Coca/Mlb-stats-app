import React, { useState, useEffect } from 'react'
import ScheduleGame from '../ScheduleGame'
import getTeams from '../../services/getTeams'
import useLiveGames from '../../hooks/useLiveGames'
import useGames from '../../hooks/useGames'

function getTeamsGameInfo(teams, game) {
  const homeTeam = teams.find(team => team.TeamID === game.HomeTeamID)
  const awayTeam = teams.find(team => team.TeamID === game.AwayTeamID)

  return [homeTeam, awayTeam]
}

export default function ({ date }) {
  const [teams, setTeams] = useState(false)
  const { schedulesGames, loading, error } = useGames(date)
  const { liveGames, today } = useLiveGames()

  useEffect(function () {
    getTeams().then(setTeams)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) return <div>Error Cñ</div>

  return schedulesGames.map(
    game =>
      teams && (
        <ScheduleGame
          liveGames={today === date && liveGames}
          teams={getTeamsGameInfo(teams, game)}
          game={game}
          key={game.GameID}
        />
      )
  )
}
