import React from 'react'

import useStatsFilters from '../../../hooks/useStatsFilters'

import { Container } from './styles'

export default function RequiredStatsFilter({ value }) {
  const { filters, setRequiredStats } = useStatsFilters()

  const handleClick = () => setRequiredStats(value)

  return (
    <Container>
      <h2
        className={filters.requiredStats === value ? 'active' : ''}
        onClick={handleClick}
      >
        {value}
      </h2>
    </Container>
  )
}
