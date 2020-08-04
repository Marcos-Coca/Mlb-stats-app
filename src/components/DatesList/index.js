import React, { useEffect, useState } from 'react'
import moment from 'moment'

export default function DateLists({ date, requiredDates, setDate }) {
  const [maxDate, setMaxDate] = useState(date)
  const [dates, setDates] = useState([])

  useEffect(() => {
    setMaxDate(moment(date).add(Math.floor(requiredDates / 2), 'days'))
  }, [date])

  useEffect(() => {
    setDates([])

    for (let i = 0; i <= requiredDates; i++) {
      const newDate = moment(maxDate).subtract(i, 'days')
      setDates(otherDates =>
        otherDates.concat({
          month: newDate.format('MMM-DD'),
          weekDay: newDate.format('dddd'),
        })
      )
    }
  }, [maxDate])

  return dates.map(currenDate => (
    <div key={currenDate.month}>
      <div>Día {currenDate.weekDay}</div>
      <div>Mes {currenDate.month}</div>
    </div>
  ))
}
