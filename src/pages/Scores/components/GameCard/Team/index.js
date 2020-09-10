import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import useTeams from 'Hooks/useTeams'

import { Image, Team, Name } from './styles'

export default function ({ id, teamsStanding }) {
  const { team, loading } = useTeams(id)
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const [teamRecord, setTeamRecord] = useState({})

  useEffect(() => {
    const teamStats = teamsStanding.find(team => team.TeamID === id) || {}
    setTeamRecord(teamStats)
  }, [teamsStanding])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Team>
      <div>
        <Image src={team.WikipediaWordMarkUrl} />
        <div>
          <Name>{isMobile ? team.Key : team.Name}</Name>
          <span>
            {teamRecord.Wins} - {teamRecord.Losses}
          </span>
        </div>
      </div>
    </Team>
  )
}
