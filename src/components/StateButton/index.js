import React from 'react'

export default function StateButton({ newState, state, children, setState }) {
  return (
    <button
      className={newState === state ? 'active' : ''}
      onClick={() => setState(newState)}
    >
      {children}
    </button>
  )
}
