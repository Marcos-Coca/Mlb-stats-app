import React from 'react'

import TeamsStanding from 'Components/TeamsStanding'

const OPTIONS = {
  Division: ['East', 'Central', 'West'],
  League: ['AL', 'NL'],
  MLB: [true],
}

export default function FullTeamsStanding({ sortBy }) {
  console.log(OPTIONS[sortBy])
  return <div>hhh</div>
}
