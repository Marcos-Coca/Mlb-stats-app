import React from 'react'
import TeamVsInfo from '../TeamVsInfo'

export default function ScheduleGame({ teams, game }) {
  return (
    <div>
      {teams && teams.map(team => <TeamVsInfo key={team.TeamID} {...team} />)}
    </div>
  )
}
