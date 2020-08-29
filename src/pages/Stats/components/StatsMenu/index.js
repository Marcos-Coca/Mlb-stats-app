import React from 'react'

import GroupByFilter from './GroupByFilter'
import RequiredStatsFilter from './RequiredStatsFilter'

export default function StatsMenu() {
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
    </div>
  )
}
