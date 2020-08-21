import React, { useEffect, useState } from 'react'
import { isEqual, subDays } from 'date-fns'

import DateCard from 'Components/Dates/DateCard'
import { Container } from './styles'

export default function DateLists({ date, requiredDates, setDate }) {
  const [dates, setDates] = useState([])

  useEffect(() => {
    setDates([])

    const maxDate = Math.floor(requiredDates / 2)

    for (let i = 0; i <= requiredDates; i++) {
      const currentDate = subDays(date, i - maxDate)
      setDates(otherDates => otherDates.concat(currentDate))
    }
  }, [date])

  return (
    <Container>
      {dates.map(currentDate => (
        <DateCard
          key={currentDate}
          date={currentDate}
          active={isEqual(date, new Date(currentDate))}
          setDate={setDate}
        />
      ))}
    </Container>
  )
}
