import React from 'react'
import moment from 'moment'
import useDate from '../../hooks/useDate'

export default function DateLists(date, requiredDates, setDate) {
  const weekDay = moment(date).format('dddd')
  const moth = moment(date).format('MMM-DD')
  return <div></div>
}
