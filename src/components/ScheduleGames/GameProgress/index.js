import React from 'react'
import { format } from 'date-fns'

import GameStatus from 'Components/GameStatus'

import { Container, Info } from './styles'

export default function GameProgress({ game, showAll }) {
  const { DateTime, Status, Inning } = game
  const gameDateTime = format(new Date(DateTime), 'p')

  return (
    <Container>
      {Status !== 'Scheduled' ? (
        <Info>
          {Status !== 'InProgress' && <span>{Status}</span>}
          {Status === 'InProgress' && <span> Inning {Inning}</span>}
          {showAll && Status === 'InProgress' && <GameStatus {...game} />}
        </Info>
      ) : (
        <div>{gameDateTime}</div>
      )}
    </Container>
  )
}
