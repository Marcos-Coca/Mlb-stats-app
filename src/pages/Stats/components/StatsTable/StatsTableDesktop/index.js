import React from 'react'

import Stats from './Stats'

export default function StatsTableDesktop({ stats }) {
  return stats.map(stat => <Stats key={stat.StatID} stats={stat} />)
}
