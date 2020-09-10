import React from 'react'

import { Table } from './styles'
export default function ({ game }) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>R</th>
            <th>H</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{game.AwayTeamRuns}</td>
            <td>{game.AwayTeamHits}</td>
            <td>{game.AwayTeamErrors}</td>
          </tr>
          <tr>
            <td>{game.HomeTeamRuns}</td>
            <td>{game.HomeTeamHits}</td>
            <td>{game.HomeTeamErrors}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
