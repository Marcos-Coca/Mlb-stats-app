import React from 'react'

import StatsTable from './components/StatsTable'
import StatsMenu from './components/StatsMenu'

import { StatsFiltersContextProvider } from './context/StatsFiltersContext'

export default function Stats() {
  return (
    <div style={{ background: '#fff' }}>
      <StatsFiltersContextProvider>
        <StatsMenu />
        <StatsTable />
      </StatsFiltersContextProvider>
    </div>
  )
}
