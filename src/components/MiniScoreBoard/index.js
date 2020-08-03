import React from 'react'
import useDate from '../../hooks/useDate'
import ListOfSchedulesGames from '../ListOfSchedulesGames'
import moment from 'moment'

export default function ScoreBoard({ visibleDays = 3 }) {
  const [date, setDate] = useDate({})
  const currentDate = moment(date).format('YYYY-MMM-D')
  const weekDay = moment(date).format('dddd')
  const moth = moment(date).format('MMM-DD')

  return (
    <>
      <div>
        <div>{weekDay}</div>
        <div>{moth}</div>
      </div>

      <button onClick={() => setDate(-1, 'days')}> -1</button>
      <button onClick={() => setDate(1, 'days')}>+1</button>
      <ListOfSchedulesGames date={currentDate} />
    </>
  )
}
