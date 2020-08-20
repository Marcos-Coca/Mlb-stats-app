import React from 'react'

import StateButton from 'Components/StateButton'

export default function DivisionButtons({ division, league, setDivision }) {
  const divisionProps = { state: division, setState: setDivision }
  return (
    <>
      <StateButton {...divisionProps} newState={'East'}>
        {league} East
      </StateButton>
      <StateButton {...divisionProps} newState={'Central'}>
        {league} Central
      </StateButton>
      <StateButton {...divisionProps} newState={'West'}>
        {league} West
      </StateButton>
    </>
  )
}
