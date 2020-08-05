import React, { useEffect } from 'react'
import useDate from '../../hooks/useDate'
import ListOfSchedulesGames from '../ListOfSchedulesGames'
import DatesList from '../DatesList'

export default function MinicoreBoard({ visibleDates }) {
  const [date, setDate] = useDate({})
  const [currentDate, setCurrentDate] = useDate({
    initialDate: date,
    dateFormat: 'YYYY-MMM-D',
  })

  useEffect(() => {
    setCurrentDate({ especificDate: date })
  }, [date])

  return (
    <>
      <DatesList date={date} requiredDates={visibleDates} setDate={setDate} />
      <button onClick={() => setDate({ number: -1, time: 'days' })}> -1</button>
      <button onClick={() => setDate({ number: 1, time: 'days' })}>+1</button>
      <ListOfSchedulesGames date={currentDate} />
    </>
  )
}
