import React from 'react'
import ScheduleGame from '../ScheduleGame'
import useLiveGames from '../../hooks/useLiveGames'
import useGames from '../../hooks/useGames'
import { List } from './styles'

export default function ({ date }) {
  const { schedulesGames, loading, error } = useGames(date)
  useLiveGames()

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) return <div>Error Cñ</div>

  return (
    <List>
      {schedulesGames.map(game => (
        <ScheduleGame game={game} key={game.GameID} />
      ))}
    </List>
  )
}
