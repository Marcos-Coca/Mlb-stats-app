import React from 'react'

import useStatsFilters from '../../../hooks/useStatsFilters'

import { Container } from './styles'

export default function RequiredStatsFilter({ value }) {
  const { filters, setGroupBy, setSortBy } = useStatsFilters()

  const handleClick = () => {
    setGroupBy(value)
    value === 'Hitting' && setSortBy('OnBasePlusSlugging')
    value === 'Pitching' && setSortBy('Wins')
  }

  return (
    <Container>
      <button
        className={filters.groupBy === value ? 'active' : ''}
        onClick={handleClick}
      >
        {value}
      </button>
    </Container>
  )
}
