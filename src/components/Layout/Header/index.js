import React from 'react'
import { Link, Container, Nav, Image } from './styles'
import { Link as RouterLink } from 'react-router-dom'

import mlbLogo from 'Assets/mlb-logo.jpg'

export default function Header() {
  return (
    <Container>
      <RouterLink to="/">
        <Image src={mlbLogo} alt="" />
      </RouterLink>

      <Nav>
        <Link to="/scores">Scores</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/standing">Standing</Link>
        <Link to="/schedule">Schedule</Link>
      </Nav>
    </Container>
  )
}
