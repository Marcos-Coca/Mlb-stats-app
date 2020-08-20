import React, { useState } from 'react'
import useDate from 'Hooks/useDate'

import StateButton from 'Components/StateButton'
import TeamStanding from 'Components/TeamsRanking/TeamStanding'

import { Section, Divisions, Leagues, Link } from './styles'

export default function TeamsRank() {
  const [season] = useDate({ dateFormat: 'YYYY' })
  const [league, setLeague] = useState('AL')
  const [division, setDivision] = useState('East')

  return (
    <div style={{ background: '#fff' }}>
      <Section>
        <h3>{season} Standings</h3>
        <div>
          <Leagues>
            <StateButton state={league} newState={'AL'} setState={setLeague}>
              American League
            </StateButton>
            <StateButton state={league} newState={'NL'} setState={setLeague}>
              National League
            </StateButton>
          </Leagues>
          <Divisions>
            <StateButton
              state={division}
              newState={'East'}
              setState={setDivision}
            >
              {league} East
            </StateButton>
            <StateButton
              state={division}
              newState={'Central'}
              setState={setDivision}
            >
              {league} East
            </StateButton>
            <StateButton
              state={division}
              newState={'West'}
              setState={setDivision}
            >
              {league} East
            </StateButton>
          </Divisions>
        </div>

        <TeamStanding season={season} division={division} league={league} />
        <Link to="/standings">Full Standings</Link>
      </Section>
    </div>
  )
}
