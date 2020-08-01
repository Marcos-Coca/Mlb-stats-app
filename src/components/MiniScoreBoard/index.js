import React, { useEffect } from 'react'
import useDate from '../../hooks/useDate'
import ListOfGames from '../ListOfGames'
import moment from 'moment'

export default function ScoreBoard() {
  const [date, setDate] = useDate({})
  const weekDay = moment(date).format('dddd')
  const moth = moment(date).format('MMM-DD')

  return (
    <>
      <button onClick={() => setDate(-1, 'days')}> -1</button>
      <div>
        <span>{weekDay}</span>
        <div>{moth}</div>
      </div>
      <button onClick={() => setDate(1, 'days')}>+1</button>
      <ListOfGames date={date} />
    </>
  )
}