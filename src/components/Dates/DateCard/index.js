import React from 'react'
import { format } from 'date-fns'

import { Container } from './styles'

export default function DateCard({ date, active, setDate }) {
  const handleClick = () => setDate(new Date(date))
  return (
    <Container onClick={handleClick}>
      <div className={active ? 'active' : ''}>
        <div>{format(date, 'eee')}</div>
        <div>{format(date, 'MMM-dd')}</div>
      </div>
    </Container>
  )
}
