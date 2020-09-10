import React from 'react'
import { format } from 'date-fns'

import GameCard from '../GameCard'
import useGames from 'Hooks/useGames'
import useLiveGames from 'Hooks/useLiveGames'
import useTeamsStanding from 'Hooks/useTeamsStanding'

import { Container } from './styles'

export default function ({ date }) {
  const season = format(date, 'yyyy')
  const teamsStanding = useTeamsStanding({ season })
  const { schedulesGames, loading, error } = useGames(date)

  // useLiveGames()

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) return <div>Error Cñ</div>

  return (
    <Container>
      {schedulesGames.map(game => (
        <GameCard key={game.GameID} teamsStanding={teamsStanding} game={game} />
      ))}
    </Container>
  )
}
