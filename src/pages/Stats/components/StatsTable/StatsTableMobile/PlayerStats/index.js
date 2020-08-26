import React from 'react'

import useTeams from 'Hooks/useTeams'

import { Info } from '../styles'

export default function PlayerStats({ stat, player }) {
  const { team = {} } = useTeams(player.TeamID)
  return (
    <Info>
      <div>
        <div>
          {player.YahooName} <span className="position">{player.Position}</span>
        </div>
        <div className="team">
          {team.City} {team.Name}
        </div>
      </div>
      <div className="stat">{stat}</div>
    </Info>
  )
}
