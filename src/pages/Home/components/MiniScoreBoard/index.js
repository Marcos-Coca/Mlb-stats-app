import React from 'react'
import { useMediaQuery } from 'react-responsive'

import useDate from 'Hooks/useDate'
import Dates from 'Components/Dates'
import SchedulesGames from 'Components/ScheduleGames'

import mlbLogo from 'Assets/0_mlb.com_logo.jpg'
import { Image, Container } from './styles'

export default function MinicoreBoard({ visibleDates }) {
  const [date, setDate] = useDate({})
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <Container>
      <Image src={mlbLogo} alt="mlb.com" />
      {isDesktop && (
        <Dates date={date} requiredDates={visibleDates} setDate={setDate} />
      )}
      <SchedulesGames date={date} />
    </Container>
  )
}
