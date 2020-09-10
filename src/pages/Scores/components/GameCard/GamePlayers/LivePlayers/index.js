import React from 'react'

import useLivePlayers from './useLivePlayers'

import { Player, PlayerImage } from '../styles'

export default function ({ game }) {
  const { hitter, pitcher } = useLivePlayers({ game })

  return (
    <div className="players">
      <Player>
        <div className="team">
          {pitcher.stats.Team} <span>PITCHING</span>
        </div>
        <div className="player">
          <PlayerImage>
            <img src={pitcher.stats.PhotoUrl} />
          </PlayerImage>
          <div className="player-info">
            <div>{pitcher.stats.LastName}</div>
            <div>
              {pitcher.gameStats.InningsPitchedDecimal} IP{' '}
              {pitcher.stats.EarnedRunAverage} ERA
            </div>
          </div>
        </div>
      </Player>

      <Player>
        <div className="team">
          <span>AT BAT </span>
          {hitter.stats.Team}
        </div>
        <div className="player">
          <PlayerImage>
            <img src={hitter.stats.PhotoUrl} />
          </PlayerImage>
          <div className="player-info">
            <div>{hitter.stats.LastName}</div>
            <div>
              {Math.round(hitter.gameStats.Hits)} -{' '}
              {Math.round(hitter.gameStats.AtBats)}{' '}
              {hitter.stats.OnBasePlusSlugging} OPS
            </div>
          </div>
        </div>
      </Player>
    </div>
  )
}
