import React from 'react'
import useDate from '../../hooks/useDate'
import { Container } from './styles'

export default function GameProgress({ game, breakPoint }) {
  let {
    Status,
    Inning,
    DateTime,
    Outs,
    RunnerOnFirst,
    RunnerOnSecond,
    RunnerOnThird,
  } = game
  const [gameDateTime] = useDate({ initialDate: DateTime, dateFormat: 'LT' })

  if (Status !== 'InProgress' && Status !== 'Scheduled') {
    return (
      <Container>
        <div>{Status}</div>
        {Inning && Status !== 'Final' && <div> Inning {Inning}</div>}
      </Container>
    )
  }

  if (Status === 'Scheduled') {
    return (
      <Container>
        <div>{gameDateTime}</div>
      </Container>
    )
  }

  return (
    <Container>
      <div>Inning {Inning}</div>
      {breakPoint && (
        <>
          <div>
            <div className={RunnerOnFirst ? 'active' : ''}></div>
            <div className={RunnerOnSecond ? 'active' : ''}></div>
            <div className={RunnerOnThird ? 'active' : ''}></div>
          </div>
          <div>
            <div className={Outs - 1 > 0 ? 'active' : ''}></div>
            <div className={Outs - 2 > 0 ? 'active' : ''}></div>
            <div className={Outs - 3 > 0 ? 'active' : ''}></div>
          </div>
        </>
      )}
    </Container>
  )
}
