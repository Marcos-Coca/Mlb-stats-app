import React from 'react'
import MiniScoreBoard from '../../components/MiniScoreBoard'

export default function Home() {
  return (
    <>
      <header>Header</header>
      <main>
        <section>
          <MiniScoreBoard visibleDates={2} />
        </section>
        <section></section>
      </main>
      {/* <section></section>
      <aside>Aside 1</aside>
      <aside>Aside 2</aside>
      <aside>Aside 3</aside>
      <aside>Aside 4</aside>
      <aside>Aside 5</aside>
      <aside>Aside 6</aside>
      <aside>Aside 7</aside> */}
    </>
  )
}
