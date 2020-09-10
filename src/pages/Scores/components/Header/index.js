import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Dates from 'Components/Dates'

import { Header, Date, Titles } from './styles'

export default function ({ date, setDate }) {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return (
    <Header>
      <Titles>
        <h1 className="active">Scores</h1>
        <h1>Schedule</h1>
      </Titles>
      <Date>
        <Dates date={date} setDate={setDate} requiredDates={isMobile ? 2 : 6} />
      </Date>
    </Header>
  )
}
