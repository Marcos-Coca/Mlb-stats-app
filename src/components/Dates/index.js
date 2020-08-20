import React, { useEffect, useState } from 'react'
import moment from 'moment'

import DateCard from 'Components/Dates/DateCard'
import { Container } from './styles'

export default function DateLists({ date, requiredDates, setDate }) {
  const [dates, setDates] = useState([])

  useEffect(() => {
    setDates([])

    const maxDate = Math.floor(requiredDates / 2)
    for (let i = 0; i <= requiredDates; i++) {
      const currentDate = moment(date).subtract(i - maxDate, 'days')
      setDates(otherDates => otherDates.concat(currentDate))
    }
  }, [date])

  return (
    <Container>
      {dates.map(currentDate => (
        <DateCard
          key={currentDate}
          date={currentDate}
          active={moment(date).isSame(moment(currentDate))}
          setDate={setDate}
        />
      ))}
    </Container>
  )
}
