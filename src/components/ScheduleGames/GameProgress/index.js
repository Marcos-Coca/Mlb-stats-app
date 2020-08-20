import React from 'react'

import useDate from 'Hooks/useDate'
import GameStatus from 'Components/ScheduleGames/GameStatus'

import { Container, Info } from './styles'

export default function GameProgress({ game, showAll }) {
  const { DateTime, Status, Inning } = game
  const [gameDateTime] = useDate({ initialDate: DateTime, dateFormat: 'LT' })

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
