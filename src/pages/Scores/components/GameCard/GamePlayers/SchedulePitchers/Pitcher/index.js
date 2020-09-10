import React from 'react'

import { Player, PlayerImage } from '../../styles'

export default function ({ pitcher = {} }) {
  return (
    <Player>
      <div className="team">{pitcher.Team}</div>
      <div className="player">
        <PlayerImage>
          <img src={pitcher.PhotoUrl} />
        </PlayerImage>
        <div className="player-info">
          <div>{pitcher.LastName}</div>
          <div className="pitcher-hand">
            {pitcher.ThrowHand}HP #{pitcher.Jersey}
          </div>
          <div>
            {Math.round(pitcher.Wins || 0)} - {Math.round(pitcher.Losses || 0)},{' '}
            {pitcher.EarnedRunAverage} ERA
          </div>
        </div>
      </div>
    </Player>
  )
}
