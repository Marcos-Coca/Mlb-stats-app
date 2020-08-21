import React, { useState } from 'react'

import FullTeamsStanding from './components/FullTeamsStanding'
import StandingMenu from './components/StandingMenu'

export default function Standings() {
  const [sortBy, setSorby] = useState('Division')

  return (
    <>
      <h1>Standings</h1>
      <StandingMenu setSorby={setSorby} />
      <FullTeamsStanding sortBy={sortBy} />
    </>
  )
}
