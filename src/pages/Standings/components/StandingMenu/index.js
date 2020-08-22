import React from 'react'

import { Select } from './styles'

export default function StandingMenu({ setSorby }) {
  const handleChange = e => {
    const { value } = e.target
    setSorby(value)
  }
  return (
    <Select>
      <select onChange={handleChange}>
        <option value="Division">Division</option>
        <option value="League">League</option>
        <option value="MLB">MLB</option>
      </select>
    </Select>
  )
}
