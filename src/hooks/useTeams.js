import { useContext } from 'react'
import TeamsContext from '../context/TeamsContext'

export default function useTeams(id) {
  const { teams } = useContext(TeamsContext)

  if (!id) {
    return teams
  }
  return teams.find(team => team.TeamID === id) || {}
}
