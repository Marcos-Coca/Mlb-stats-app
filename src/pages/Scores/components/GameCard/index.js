import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Team from './Team'
import Status from './Status'
import GameState from './GameState'
import GamePlayers from './GamePlayers'

import { GameCard, Game } from './styles'

export default function ({ game, teamsStanding }) {
  const isMobile = useMediaQuery({ maxWidth: 500 })

  return (
    <GameCard>
      <GameState game={game} />
      <Game>
        <div>
          <Team id={game.AwayTeamID} teamsStanding={teamsStanding} />
          <Team id={game.HomeTeamID} teamsStanding={teamsStanding} />
        </div>
        {game.Status !== 'Scheduled' && <Status game={game} />}
      </Game>
      {!isMobile && <GamePlayers game={game} />}
    </GameCard>
  )
}
