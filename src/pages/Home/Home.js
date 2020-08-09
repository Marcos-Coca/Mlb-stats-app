import React from 'react'
import MiniScoreBoard from '../../components/MiniScoreBoard'
import { Container } from './styles.js'
import NewsList from '../../components/NewsList'

export default function Home() {
  return (
    <Container>
      <header>Header</header>
      <main>
        <MiniScoreBoard visibleDates={2} />
        <NewsList />
      </main>
      {/* <section></section>
      <aside>Aside 1</aside>
      <aside>Aside 2</aside>
      <aside>Aside 3</aside>
      <aside>Aside 4</aside>
      <aside>Aside 5</aside>
      <aside>Aside 6</aside>
      <aside>Aside 7</aside> */}
    </Container>
  )
}
