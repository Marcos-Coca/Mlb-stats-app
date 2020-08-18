import { useEffect, useState } from 'react'
import getTeamsStanding from 'Services/getTeamsStanding'

export default function useStanding(teamID, season = '2020') {
  const [teamsStanding, setTeamsStanding] = useState([])

  useEffect(() => {
    getTeamsStanding(season).then(setTeamsStanding)
  }, [season])

  return teamsStanding.find(team => team.TeamID === teamID) || {}
}
