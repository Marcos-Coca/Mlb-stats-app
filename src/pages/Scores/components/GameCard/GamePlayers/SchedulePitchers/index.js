import React from 'react'

import Pitcher from './Pitcher'
import useProbablePitchers from './useProbablePitchers'

export default function ({ game, title }) {
  const { pitchers, loading } = useProbablePitchers({ ...game })

  return (
    <div className="players">
      <div className="title">{title}</div>
      {!loading &&
        pitchers.map((pitcher, index) => (
          <Pitcher key={pitcher?.PlayerID || index} pitcher={pitcher || {}} />
        ))}
    </div>
  )
}
