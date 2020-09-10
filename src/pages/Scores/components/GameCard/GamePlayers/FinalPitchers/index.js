import React from 'react'

import Pitcher from './Pitcher'
import useFinalPitchers from './useFinalPitchers'

export default function ({ game }) {
  const { pitchers, loading } = useFinalPitchers({ game })
  return (
    <div>
      {!loading &&
        pitchers.map(pitcher => {
          const desicion = Object.keys(pitcher)[0]
          return (
            pitcher[desicion] && (
              <Pitcher
                key={pitcher[desicion].PlayerID}
                desicion={desicion}
                pitcher={pitcher[desicion]}
              />
            )
          )
        })}
    </div>
  )
}
