import React, { useState } from 'react'
import useDate from 'Hooks/useDate'

import TeamStanding from 'Components/TeamsRanking/TeamStanding'

export default function TeamsRank() {
  const [season] = useDate({ dateFormat: 'YYYY' })
  const [league, setLeague] = useState('AL')
  const [division, setDivision] = useState('East')

  const setLeagueAmerican = () => setLeague('AL')
  const setLeagueNational = () => setLeague('NL')

  const setEastDivision = () => setDivision('East')
  const setCentralDivision = () => setDivision('Central')
  const setWestDivision = () => setDivision('West')

  return (
    <>
      <div>
        <button onClick={setLeagueAmerican}>American League</button>
        <button onClick={setLeagueNational}>National League</button>
      </div>
      <button onClick={setEastDivision}>{league} East</button>
      <button onClick={setCentralDivision}>{league} Central</button>
      <button onClick={setWestDivision}>{league} West</button>

      <TeamStanding season={season} division={division} league={league} />
    </>
  )
}
