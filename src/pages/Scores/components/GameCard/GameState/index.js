import React from 'react'
import { format } from 'date-fns'

import { GameState } from './styles'

export default function ({ game }) {
  const { Status, DateTime } = game
  const gameDateTime = format(new Date(DateTime), 'p')

  return (
    <GameState>
      {Status !== 'Scheduled' ? (
        <>
          {Status !== 'InProgress' && <span>{Status}</span>}
          {Status === 'InProgress' && <span className="live">Live</span>}
        </>
      ) : (
        <div>{gameDateTime}</div>
      )}
    </GameState>
  )
}
