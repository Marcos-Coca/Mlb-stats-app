import React from 'react'
import { format } from 'date-fns'

import useTeamsStanding from 'Hooks/useTeamsStanding'
import TeamsStanding from 'Components/TeamsStanding'

const OPTIONS = {
  Division: [
    ['AL', 'East'],
    ['AL', 'Central'],
    ['AL', 'West'],
    ['NL', 'East'],
    ['NL', 'Central'],
    ['NL', 'West'],
  ],
  League: ['AL', 'NL'],
  MLB: [undefined],
}

export default function FullTeamsStanding({ sortBy }) {
  const season = format(new Date(), 'yyyy')
  const teamsStanding = useTeamsStanding({ season })

  return OPTIONS[sortBy].map(option => {
    const isValidTeam = team =>
      sortBy === 'Division'
        ? team['Division'] === option[1] && team['League'] === option[0]
        : team[sortBy] === option

    return (
      <TeamsStanding
        key={Math.random()}
        full
        isValidTeam={isValidTeam}
        teamsStanding={teamsStanding}
        title={
          sortBy === 'Division'
            ? option[0] + ' ' + option[1]
            : (option ? option + ' ' : '') + sortBy
        }
      />
    )
  })
}
