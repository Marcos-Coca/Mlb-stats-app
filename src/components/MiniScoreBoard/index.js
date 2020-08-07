import React, { useEffect } from 'react'
import useDate from '../../hooks/useDate'
import DatesList from '../DatesList'
import ListOfSchedulesGames from '../ListOfSchedulesGames'
import { Image, Container, Button, List } from './styles'
import mlbSecond from '../../../assets/0_mlb.com_logo.jpg'
import { useMediaQuery } from 'react-responsive'

export default function MinicoreBoard({ visibleDates }) {
  const [date, setDate] = useDate({})
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const [currentDate, setCurrentDate] = useDate({
    initialDate: date,
    dateFormat: 'YYYY-MMM-D',
  })

  useEffect(() => {
    setCurrentDate({ especificDate: date })
  }, [date])

  return (
    <Container>
      <Image src={mlbSecond} alt="mlb.com" />
      {isDesktop && (
        <DatesList date={date} requiredDates={visibleDates} setDate={setDate} />
      )}
      <Button onClick={() => setDate({ number: -1, time: 'days' })}> -1</Button>
      <Button onClick={() => setDate({ number: 1, time: 'days' })}>+1</Button>
      <div>
        <ListOfSchedulesGames date={currentDate} />
      </div>
    </Container>
  )
}
