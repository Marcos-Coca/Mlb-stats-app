import React from 'react'

export default function StandingMenu({ setSorby }) {
  const handleChange = e => {
    const { value } = e.target
    setSorby(value)
  }
  return (
    <div>
      <select onChange={handleChange}>
        <option value="Division">Division</option>
        <option value="League">League</option>
        <option value="MLB">MLB</option>
      </select>
    </div>
  )
}
