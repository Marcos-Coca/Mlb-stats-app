import React from 'react'
import { PITCHING_STATS, HITTING_STATS } from 'Utils/stats'

export default function setStats(stats, { sortBy, groupBy }) {
  const resultStats = []
  const statsSchema = groupBy === 'Hitting' ? HITTING_STATS : PITCHING_STATS

  for (let stat in statsSchema) {
    const requiredStat = stats[statsSchema[stat]]

    resultStats.push(
      <td
        className={statsSchema[stat] === sortBy ? 'active' : ''}
        key={Math.random()}
      >
        {requiredStat > 5 ? Math.round(requiredStat) : requiredStat}
      </td>
    )
  }

  return resultStats
}
