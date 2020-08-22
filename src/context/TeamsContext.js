import React, { useState, useEffect } from 'react'
import getTeams from 'Services/getTeams'

const Context = React.createContext({})

export function TeamsContextProvider({ children }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTeams()
      .then(setTeams)
      .then(() => setLoading(false))
  }, [])

  return (
    <Context.Provider value={{ teams, loading }}>{children}</Context.Provider>
  )
}

export default Context
