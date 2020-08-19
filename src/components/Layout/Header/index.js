import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/scores">Scores</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/standing">Standing</Link>
      <Link to="/schedule">Schedule</Link>
    </header>
  )
}
