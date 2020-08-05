import React from 'react'
import useDate from '../../hooks/useDate'

export default function GameProgress({ game }) {
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
      <div>
        <div>{Status}</div>
        {Inning && Status !== 'Final' && <div> Inning {Inning}</div>}
      </div>
    )
  }

  if (Status === 'Scheduled') {
    return (
      <div>
        <div>{gameDateTime}</div>
      </div>
    )
  }

  return (
    <div>
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
    </div>
  )
}
