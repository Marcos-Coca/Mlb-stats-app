import React from 'react'

import useStatsFilters from '../../../hooks/useStatsFilters'

export default function SortByFilter({ text, value }) {
  const { filters, setSortBy } = useStatsFilters()

  const handleClick = () => setSortBy(value)

  return (
    <div>
      <button
        className={filters.sortBy === value ? 'active' : ''}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  )
}
