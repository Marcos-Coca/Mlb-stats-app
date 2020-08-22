import { useState, useEffect } from 'react'

import getTemasStanding from 'Services/getTeamsStanding'

export default function useTeamsStats({ season }) {
  const [teamsStanding, setTeamsStanding] = useState([])

  useEffect(() => {
    getTemasStanding(season)
      .then(teams => teams.sort((a, b) => b.Percentage - a.Percentage))
      .then(setTeamsStanding)
  }, [season])

  return teamsStanding
}
