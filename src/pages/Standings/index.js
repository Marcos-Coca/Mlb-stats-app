import React, { useState } from 'react'

import FullTeamsStanding from './components/FullTeamsStanding'
import StandingMenu from './components/StandingMenu'

import { Container } from './styles'

export default function Standings() {
  const [sortBy, setSorby] = useState('Division')

  return (
    <Container>
      <div>
        <h1>Standings</h1>
        <StandingMenu setSorby={setSorby} />
        <FullTeamsStanding sortBy={sortBy} />
      </div>
    </Container>
  )
}
