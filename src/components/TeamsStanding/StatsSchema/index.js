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
        <div>
          W<span>Wins</span>
        </div>
      </Th>
      <Th>
        <div>
          L<span>Losses</span>
        </div>
      </Th>
      <Th>
        <div>
          %<span>Winning Percentage</span>
        </div>
      </Th>
      <Th>
        <div>
          GB
          <span>Games Behind</span>
        </div>
      </Th>
      {full && <FullStatsSchema />}
    </tr>
  )
}
