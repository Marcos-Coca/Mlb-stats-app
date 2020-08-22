import { useContext } from 'react'
import TeamsContext from '../context/TeamsContext'

export default function useTeams(id) {
  const { teams, loading } = useContext(TeamsContext)

  if (!id) {
    return { teams, loading }
  }
  const team = teams.find(team => team.TeamID === id) || {}
  return { team, loading }
}
