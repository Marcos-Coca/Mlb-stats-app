import React from 'react'

import News from 'Components/News'
import MiniScoreBoard from './components/MiniScoreBoard'
import MiniTeamsRanking from './components/MiniTeamsRanking'

import { Container } from './styles.js'

export default function Home() {
  return (
    <Container>
      <aside className="MiniScoreBoard">
        <MiniScoreBoard visibleDates={2} />
      </aside>
      <main>
        <News className="News" />
      </main>
      <aside className="MiniTeamsRanking">
        <MiniTeamsRanking />
      </aside>
    </Container>
  )
}
