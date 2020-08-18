import React from 'react'

import NewsList from 'Components/News/NewsList'
import MiniScoreBoard from './components/MiniScoreBoard'
import TeamsRank from 'Components/TeamsRanking/TeamsRank'

import { Container } from './styles.js'

export default function Home() {
  return (
    <Container>
      <header>Header</header>

      <MiniScoreBoard visibleDates={2} />
      <NewsList />
      <TeamsRank />
    </Container>
  )
}
