import React from 'react'
import { format } from 'date-fns'
import useStats from 'Hooks/useStats'

export default function Stats() {
  const season = format(new Date(), 'yyyy')
  const stats = useStats({ requiredStats: 'Teams', sortBy: 'HomeRuns', season })
  return stats.map(team => (
    <div>
      <span>
        {team.Name} {team.HomeRuns}
      </span>
    </div>
  ))
}
