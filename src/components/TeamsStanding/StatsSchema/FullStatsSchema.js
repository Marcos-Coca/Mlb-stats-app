import React from 'react'

import { Th } from './styles'

export default function StatsSchemaFull() {
  return (
    <>
      <Th>
        <div>
          WCGB
          <span>Wild Card Games Behind</span>
        </div>
      </Th>
      <Th>
        <div>
          L10
          <span>Record in the Last 10 Games</span>
        </div>
      </Th>
      <Th>
        <div>
          STRK
          <span>Current Streak</span>
        </div>
      </Th>
      <Th>
        <div>
          RS
          <span>Runs Scored</span>
        </div>
      </Th>
      <Th>
        <div>
          RA
          <span>Runs Allowed</span>
        </div>
      </Th>
      <Th>
        <div>
          DIFF
          <span>Run Differential (runs scored - runs allowed)</span>
        </div>
      </Th>
      <Th>
        <div>
          Home
          <span>Record at Home</span>
        </div>
      </Th>
      <Th>
        <div>
          Away
          <span>Record When Away</span>
        </div>
      </Th>
    </>
  )
}
