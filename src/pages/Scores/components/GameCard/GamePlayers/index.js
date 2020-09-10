import React from 'react'

import LivePlayers from './LivePlayers'
import FinalPitchers from './FinalPitchers'
import SchedulePitchers from './SchedulePitchers'

import { Container } from './styles'

export default function ({ game }) {
  return (
    <Container>
      {game.Status === 'Scheduled' && (
        <SchedulePitchers title={'probable pitchers'} game={game} />
      )}
      {game.Status === 'Final' && <FinalPitchers game={game} />}
      {game.Status === 'InProgress' && <LivePlayers game={game} />}
    </Container>
  )
}
