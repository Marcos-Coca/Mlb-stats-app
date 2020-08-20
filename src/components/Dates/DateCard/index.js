import React from 'react'
import moment from 'moment'

import { Container } from './styles'

export default function DateCard({ date, active, setDate }) {
  const handleClick = () => setDate({ especificDate: date })

  return (
    <Container onClick={handleClick}>
      <div className={active ? 'active' : ''}>
        <div>{moment(date).format('ddd')}</div>
        <div>{moment(date).format('MMM-DD')}</div>
      </div>
    </Container>
  )
}
