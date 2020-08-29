import React from 'react'

import StatsTable from './components/StatsTable'
import StatsMenu from './components/StatsMenu'
import StatsSchema from './components/StatsSchema'

import { Container, Table, TableContainer } from './styles'

import { StatsFiltersContextProvider } from './context/StatsFiltersContext'

export default function Stats() {
  return (
    <Container>
      <StatsFiltersContextProvider>
        <StatsMenu />
        <TableContainer>
          <Table>
            <StatsSchema />
            <StatsTable />
          </Table>
        </TableContainer>
      </StatsFiltersContextProvider>
    </Container>
  )
}
