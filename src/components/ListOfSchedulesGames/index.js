import React, { useState, useEffect } from 'react'
import moment from 'moment'
import ScheduleGame from '../ScheduleGame'
import getTeams from '../../services/getTeams'
import useScheduleGames from '../../hooks/useScheduleGames'

function getTeamsGameInfo(teams, game) {
  const homeTeam = teams.find(team => team.TeamID === game.HomeTeamID)
  const awayTeam = teams.find(team => team.TeamID === game.AwayTeamID)
  return [homeTeam, awayTeam]
}

export default function ({ date }) {
  const [teams, setTeams] = useState(false)
  const currentDate = moment(date).format('YYYY-MMM-D')
  const { games } = useScheduleGames(currentDate)

  useEffect(function () {
    getTeams().then(setTeams)
  }, [])

  return games.map(
    game =>
      teams && (
        <ScheduleGame
          teams={getTeamsGameInfo(teams, game)}
          game={game}
          key={game.GameID}
        />
      )
  )
}
