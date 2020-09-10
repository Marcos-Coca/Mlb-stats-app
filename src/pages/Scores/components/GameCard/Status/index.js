import React from 'react'
import { useMediaQuery } from 'react-responsive'

import GameStatus from 'Components/GameStatus'
import GameProgressTable from './GameProgressTable'

import { Status, Inning, Border } from './styles'

export default function ({ game }) {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const isNarrowMobile = useMediaQuery({ maxWidth: 320 })

  return (
    <Status>
      {!isMobile ? (
        <>
          <GameProgressTable game={game} />
          <Border Status={game.Status} />
        </>
      ) : (
        <div>
          <div>{game.AwayTeamRuns}</div>
          <div>{game.HomeTeamRuns}</div>
        </div>
      )}
      {!isNarrowMobile && game.Status === 'InProgress' && (
        <div className="game-status">
          <Inning>Inning {game.Inning}</Inning>
          <GameStatus {...game} />
        </div>
      )}
    </Status>
  )
}
