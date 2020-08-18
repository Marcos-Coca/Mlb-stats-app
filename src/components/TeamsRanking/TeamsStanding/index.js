import React, { useEffect, useState } from 'react'
import moment from 'moment'

import getTemasStanding from 'Services/getTeamsStanding'
import TeamRank from 'Components/TeamsRanking/TeamRank'

export default function TeamsStanding() {
  const [division, setDivision] = useState('East')
  const [league, setLeague] = useState('AL')
  const [teamsStanding, setTeamsStanding] = useState([])
  const season = moment().format('YYYY')

  useEffect(() => {
    getTemasStanding(season).then(setTeamsStanding)
  }, [season])

  return teamsStanding.map(
    team =>
      team.League === league &&
      team.Division === division && (
        <TeamRank key={team.TeamID} teamID={team.TeamID} />
      )
  )
}
