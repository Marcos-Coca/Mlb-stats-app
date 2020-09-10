import React from 'react'

import { Out, Container, Runners } from './styles'

export default function GameStatus({
  RunnerOnFirst,
  RunnerOnSecond,
  RunnerOnThird,
  Outs,
}) {
  return (
    <Container>
      <Runners>
        <div className={RunnerOnFirst ? 'active' : ''}></div>
        <div className={RunnerOnSecond ? 'active' : ''}></div>
        <div className={RunnerOnThird ? 'active' : ''}></div>
      </Runners>
      <Out>
        <div className={Outs - 1 >= 0 ? 'active' : ''}></div>
        <div className={Outs - 2 >= 0 ? 'active' : ''}></div>
        <div className={Outs - 3 >= 0 ? 'active' : ''}></div>
      </Out>
    </Container>
  )
}
