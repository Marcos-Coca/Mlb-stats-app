import React from 'react'
import { useMediaQuery } from 'react-responsive'

import useDate from 'Hooks/useDate'
import DatesList from 'Components/Dates/DatesList'
import ListOfSchedulesGames from 'Components/ScheduleGames/ListOfSchedulesGames'

import mlbSecond from 'Assets/0_mlb.com_logo.jpg'
import { Image, Container } from './styles'

export default function MinicoreBoard({ visibleDates }) {
  const [date, setDate] = useDate({})
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <Container>
      <Image src={mlbSecond} alt="mlb.com" />
      {isDesktop && (
        <DatesList date={date} requiredDates={visibleDates} setDate={setDate} />
      )}
      <ListOfSchedulesGames date={date} />
    </Container>
  )
}
