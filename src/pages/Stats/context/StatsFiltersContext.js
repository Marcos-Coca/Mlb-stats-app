import React, { useReducer } from 'react'

import { format } from 'date-fns'

const Context = React.createContext({})

const TYPES = {
  requiredStats: 1,
  sortBy: 0,
  groupBy: -1,
  season: 2,
}

const initialState = {
  requiredStats: 'Teams',
  sortBy: 'OnBasePlusSlugging',
  groupBy: 'Hitting',
  season: format(new Date(), 'yyyy'),
}

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.requiredStats:
      return { ...state, requiredStats: action.payload }

    case TYPES.sortBy:
      return { ...state, sortBy: action.payload }

    case TYPES.groupBy:
      return { ...state, groupBy: action.payload }

    case TYPES.season:
      return { ...state, season: action.payload }

    default:
      throw new Error('Invalid Action Type')
  }
}

export function StatsFiltersContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch, TYPES }}>
      {children}
    </Context.Provider>
  )
}

export default Context
