import React from 'react'
import FullStatsSchema from './FullStatsSchema'

import { Th } from './styles'

export default function StastSchema({ full, title }) {
  return (
    <tr>
      <Th>
        <span>{title}</span>
      </Th>
      <Th>
        <span>W</span>
      </Th>
      <Th>
        <span>L</span>
      </Th>
      <Th>
        <span>%</span>
      </Th>
      <Th>
        <span>GB</span>
      </Th>
      {full && <FullStatsSchema />}
    </tr>
  )
}
