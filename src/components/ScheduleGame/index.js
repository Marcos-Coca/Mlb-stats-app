import React from 'react'
import TeamVsInfo from '../TeamVsInfo'

export default function ScheduleGame({ liveGames, teams, game }) {
  console.log(game)
  return (
    <div>
      {teams && teams.map(team => <TeamVsInfo key={team.TeamID} {...team} />)}

      <br />
    </div>
  )
}
