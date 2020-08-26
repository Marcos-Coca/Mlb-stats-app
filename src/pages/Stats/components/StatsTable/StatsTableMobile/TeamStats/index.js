import React from 'react'

import { Info } from '../styles'

export default function TeamStats({ team, stat }) {
  return (
    <Info>
      <div>
        {team.City} {team.Name}
      </div>
      <div className="stat">{stat}</div>
    </Info>
  )
}
