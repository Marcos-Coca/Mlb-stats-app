import styled from 'styled-components'

import { FONT_OFF_COLOR, SECONDARY_COLOR } from 'Styles/colors'

export const Header = styled.header`
  background: #fff;
  padding-left: 1rem;
`
export const Date = styled.div`
  padding: 1rem 0.5rem;

  & > div {
    margin: 0;
    width: 65%;
  }

  @media (max-width: 500px) {
    & > div {
      margin: 0;
      width: 100%;
    }
  }
`

export const Titles = styled.div`
  font-weight: 800;
  padding-top: 1rem;
  color: ${FONT_OFF_COLOR};
  & h1 {
    margin-left: 10px;
    display: inline-block;
  }
  & .active {
    color: ${SECONDARY_COLOR};
  }
`
