import React, { useState } from 'react'
import { format } from 'date-fns'

import useTeamsStanding from 'Hooks/useTeamsStanding'
import TeamsStanding from 'Components/TeamsStanding'

import DivisionButtons from './DivisionButtons'
import LeagueButtons from './LeagueButtons'

import { Section, Divisions, Leagues, Link, Container } from './styles'

export default function TeamsRank() {
  const season = format(new Date(), 'Y')
  const teamsStanding = useTeamsStanding({ season })
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
          teamsStanding={teamsStanding}
        />

        <Link to="/standings">Full Standings</Link>
      </Section>
    </Container>
  )
}
