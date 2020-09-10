import React from 'react'

import { PlayerImage, Player } from '../../styles'

export default function ({ pitcher, desicion }) {
  return (
    <Player>
      <div className="player">
        <PlayerImage>
          <img src={pitcher.PhotoUrl} />
        </PlayerImage>
        <div>
          <div className="player-info">
            <div>
              <span className="desicion">{desicion}:</span> {pitcher.LastName}
            </div>
            {desicion !== 'SV' ? (
              <div>
                {Math.round(pitcher.Wins || 0)} -{' '}
                {Math.round(pitcher.Losses || 0)}, {pitcher.EarnedRunAverage}{' '}
                ERA
              </div>
            ) : (
              <div>{Math.round(pitcher.Saves) || 1}</div>
            )}
          </div>
        </div>
      </div>
    </Player>
  )
}
