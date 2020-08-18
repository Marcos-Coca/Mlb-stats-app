import React from 'react'
import moment from 'moment'

export default function DateCard({ date, active, setDate }) {
  const handleClick = () => setDate({ especificDate: date })

  return (
    <div className={active ? 'active' : ''} onClick={handleClick}>
      <div className="weekDay">{moment(date).format('dddd')}</div>
      <div className="month">{moment(date).format('MMM-DD')}</div>
    </div>
  )
}
