import React from 'react'

export default function TeamInfo({ image, Name, runs }) {
  return (
    <div>
      <img src={image} alt={Name} width="50px" height="50px" />
      <div>
        <div> {Name}</div>
        {runs && <div>{runs}</div>}
      </div>
    </div>
  )
}
