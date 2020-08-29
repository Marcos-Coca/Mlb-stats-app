import React from 'react'

import Stats from './Stats'
import { Header } from './styles'

export default function StatsTableMobile({ sortBy, stats }) {
  const title = sortBy.replace(/([A-Z])/g, ' $1')

  return (
    <>
      <Header>
        <th>{title}</th>
      </Header>
      {stats.map(stat => (
        <Stats key={stat.StatID} stats={stat} />
      ))}
    </>
  )
}
