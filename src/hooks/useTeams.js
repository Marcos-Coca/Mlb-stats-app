import { useContext, useState } from 'react'
import TeamsContext from '../context/TeamsContext'

export default function useTeams(id) {
  const { teams, loading } = useContext(TeamsContext)

  if (loading) {
    return { loading }
  }
  if (!id) {
    return { teams }
  }
  const team = teams.find(team => team.TeamID === id) || {}
  return { team }
}
