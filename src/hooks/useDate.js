import { useState } from 'react'
import moment from 'moment'

export default function useDate({ initialDate = moment(), dateFormat }) {
  const [date, setDate] = useState(() => moment(initialDate).format(dateFormat))

  const changeDate = (number, time, especificDate) => {
    if (especificDate) {
      return setDate(moment(especificDate).format(dateFormat))
    }
    const newDate = moment(date, dateFormat).add(number, time)
    return setDate(moment(newDate).format(dateFormat))
  }

  return [date, changeDate]
}
