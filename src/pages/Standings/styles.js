import styled from 'styled-components'
import { SECONDARY_COLOR } from 'Styles/GlobalStyles'

export const Container = styled.main`
  width: 90%;
  margin: auto;
  min-width: 680px;
  background: #fff;

  & td {
    height: 48px;
  }

  & tbody td:first-child {
    font-weight: 700;
    border-width: 2px;
    background: #ececec;
    color: ${SECONDARY_COLOR};
  }

  & > div {
    width: 95%;
    margin: auto;
    padding: 1rem 0;
  }
`
