import React from 'react'

import StateButton from 'Components/StateButton'

export default function LeagueButtons({ league, setLeague }) {
  return (
    <>
      <StateButton state={league} newState={'AL'} setState={setLeague}>
        American League
      </StateButton>
      <StateButton state={league} newState={'NL'} setState={setLeague}>
        National League
      </StateButton>
    </>
  )
}
