import React from 'react'

export default function TeamVsInfo({ WikipediaWordMarkUrl, Name }) {
  return (
    <div>
      <img src={WikipediaWordMarkUrl} alt={Name} width="50px" height="50px" />
      <div>
        <div> {Name}</div>
        <div></div>{' '}
      </div>
    </div>
  )
}
