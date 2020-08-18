import React from 'react'

export default function GameStatus({
  RunnerOnFirst,
  RunnerOnSecond,
  RunnerOnThird,
  Outs,
}) {
  return (
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
  )
}
