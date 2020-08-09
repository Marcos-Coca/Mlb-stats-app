import React, { useState, useEffect } from 'react'
import getTeams from '../services/getTeams'

const Context = React.createContext({})

export function TeamsContextProvider({ children }) {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams().then(setTeams)
  }, [])

  return <Context.Provider value={{ teams }}>{children}</Context.Provider>
}

export default Context
