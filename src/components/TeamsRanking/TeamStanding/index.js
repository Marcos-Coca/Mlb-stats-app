import React, { useState, useEffect } from 'react'

import TeamStats from 'Components/TeamsRanking/TeamStats'
import getTemasStanding from 'Services/getTeamsStanding'

export default function TeamStanding({ division, league, season }) {
  const [teamsStanding, setTeamsStanding] = useState([])

  useEffect(() => {
    getTemasStanding(season).then(setTeamsStanding)
  }, [season])

  return (
    <table>
      <thead>
        <tr>
          <th>{division}</th>
          <th>W</th>
          <th>L</th>
          <th>%</th>
          <th>GB</th>
        </tr>
      </thead>
      <tbody>
        {teamsStanding.map(
          ({ Division, League, TeamID }) =>
            Division === division &&
            League === league && <TeamStats key={TeamID} teamID={TeamID} />
        )}
      </tbody>
    </table>
  )
}
