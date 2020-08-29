import styled from 'styled-components'
import { MAIN_COLOR } from 'Styles/colors'

export const Table = styled.table`
  width: 100%;
  margin: auto;
  height: 270px;
  font-size: 14px;
  margin-bottom: 1.5rem;
`
export const Tbody = styled.tbody`
  border-top: none;
  border: 1px solid #d2d2d2;
`

export const Thead = styled.thead`
  color: #fff;
  font-weight: normal;
  background: ${MAIN_COLOR};
`
