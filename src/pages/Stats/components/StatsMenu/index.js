import React from 'react'
import useStatsFilters from '../../hooks/useStatsFilters'

import HittingStats from './HittingStats'
import PitchingStats from './PitchingStats'
import GroupByFilter from './GroupByFilter'
import RequiredStatsFilter from './RequiredStatsFilter'

import { SortMenu } from './styles'

export default function StatsMenu() {
  const { filters } = useStatsFilters()

  return (
    <div>
      <div>
        <RequiredStatsFilter value="Players" />
        <RequiredStatsFilter value="Teams" />
      </div>
      <div>
        <GroupByFilter value="Hitting" />
        <GroupByFilter value="Pitching" />
      </div>
      <SortMenu>
        {filters.groupBy === 'Hitting' && <HittingStats />}
        {filters.groupBy === 'Pitching' && <PitchingStats />}
      </SortMenu>
    </div>
  )
}
