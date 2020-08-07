import React from 'react'
import { TeamLogo, Container, Info } from './styles'

export default function TeamInfo({ image, Name, runs, Key, City }) {
  return (
    <Container>
      <Info>
        <TeamLogo src={image} />
        {City && <span>{City}</span>}
        {Name && <span>{Name}</span>}
        {Key && <span>{Key}</span>}
      </Info>
      {runs !== undefined && <div>{runs}</div>}
    </Container>
  )
}
