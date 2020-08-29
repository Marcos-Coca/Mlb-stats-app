import React from 'react'

import useStatsFilters from '../../../hooks/useStatsFilters'

export default function SortByFilter({ text, value }) {
  const { filters, setSortBy } = useStatsFilters()

  const handleClick = () => setSortBy(value)

  return (
    <th className={filters.sortBy === value ? 'active' : ''}>
      <button onClick={handleClick}>{text}</button>
    </th>
  )
}
