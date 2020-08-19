import styled from 'styled-components'
import { MAIN_COLOR } from '../../../styles/GlobalStyles'

export const Table = styled.table`
  width: 100%;
  margin: auto;
  height: 270px;
  font-size: 14px;
  border-spacing: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  color: #fff;
  font-weight: normal;
  background: ${MAIN_COLOR};
`

export const Tbody = styled.tbody`
  border-top: none;
  border: 1px solid #d2d2d2;
`
export const Th = styled.th`
  padding: 5px;
  height: 32px;
  font-weight: 500;

  & span {
    border-bottom: 1px dotted;
  }

  &:first-of-type span {
    border-bottom: 0;
    padding-left: 0.7rem;
  }
  &:first-of-type {
    text-align: initial;
  }
`
