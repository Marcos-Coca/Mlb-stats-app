import React from 'react'

export default function FullTeamStats({ stats }) {
  return (
    <>
      <td>
        {stats.WildCardGamesBehind === 0 ? '-' : stats.WildCardGamesBehind}
      </td>
      <td>
        {stats.LastTenGamesWins}-{stats.LastTenGamesLosses}{' '}
      </td>
      <td>{stats.Streak}</td>
      <td>{stats.RunsScored}</td>
      <td>{stats.RunsAgainst}</td>
      <td>{stats.RunsScored - stats.RunsAgainst}</td>
      <td>
        {stats.HomeWins}-{stats.HomeLosses}
      </td>
      <td>
        {stats.AwayWins}-{stats.AwayLosses}
      </td>
    </>
  )
}
