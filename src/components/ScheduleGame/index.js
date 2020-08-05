import React from 'react'
import TeamInfo from '../TeamInfo'
import GameProgress from '../GameProgress'

export default function ScheduleGame({ liveGames, teams, game }) {
  return (
    <div>
      {teams &&
        teams.map(team => (
          <TeamInfo
            key={team.TeamID}
            image={team.WikipediaWordMarkUrl}
            Name={team.Name}
            runs={team.runs}
          />
        ))}
      <GameProgress game={game} />
      <br />
    </div>
  )
}
