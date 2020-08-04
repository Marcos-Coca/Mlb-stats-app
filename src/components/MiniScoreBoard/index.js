import React, { useEffect } from 'react'
import useDate from '../../hooks/useDate'
import ListOfSchedulesGames from '../ListOfSchedulesGames'
import DatesList from '../DatesList'

export default function ScoreBoard({ visibleDays = 3 }) {
  const [date, setDate] = useDate({})
  const [currentDate, setCurrentDate] = useDate({
    initialDate: date,
    dateFormat: 'YYYY-MMM-D',
  })
  // const weekDay = moment(date).format('dddd')
  // const moth = moment(date).format('MMM-DD')

  useEffect(() => {
    setCurrentDate({ especificDate: date })
  }, [date])

  return (
    <>
      {/* <div>
        <div>{weekDay}</div>
        <div>{moth}</div>
      </div> */}
      <DatesList date={date} requiredDates={6} />

      <button onClick={() => setDate({ number: -1, time: 'days' })}> -1</button>
      <button onClick={() => setDate({ number: 1, time: 'days' })}>+1</button>
      {/* <ListOfSchedulesGames date={currentDate} /> */}
    </>
  )
}
