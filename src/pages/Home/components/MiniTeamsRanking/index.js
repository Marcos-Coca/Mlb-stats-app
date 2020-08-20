import React, { useState } from 'react'
import useDate from 'Hooks/useDate'

import TeamsStanding from 'Components/TeamsStanding'

import DivisionButtons from './DivisionButtons'
import LeagueButtons from './LeagueButtons'

import { Section, Divisions, Leagues, Link, Container } from './styles'

export default function TeamsRank() {
  const [season] = useDate({ dateFormat: 'YYYY' })
  const [league, setLeague] = useState('AL')
  const [division, setDivision] = useState('East')

  const isValidTeam = team =>
    team.Division === division && team.League === league

  return (
    <Container>
      <Section>
        <h3>{season} Standings</h3>
        <div>
          <Leagues>
            <LeagueButtons league={league} setLeague={setLeague} />
          </Leagues>

          <Divisions>
            <DivisionButtons
              division={division}
              league={league}
              setDivision={setDivision}
            />
          </Divisions>
        </div>

        <TeamsStanding
          isValidTeam={isValidTeam}
          title={division}
          season={season}
        />

        <Link to="/standings">Full Standings</Link>
      </Section>
    </Container>
  )
}
