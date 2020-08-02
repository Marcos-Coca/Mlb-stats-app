import React from 'react'

export default function TeamVsInfo({ WikipediaWordMarkUrl, Name }) {
  return (
    <div>
      <img src={WikipediaWordMarkUrl} alt={Name} />
      <span>{Name}</span>
    </div>
  )
}
