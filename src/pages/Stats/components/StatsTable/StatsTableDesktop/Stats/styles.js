import styled from 'styled-components'
import { FONT_THIRD_COLOR, FONT_MAIN_COLOR } from 'Styles/colors'

export const Tr = styled.tr`
  height: 35px;
  text-align: center;

  & td {
    font-weight: 700;
    font-size: 0.8125rem;
    padding: 0.125rem 0.5rem;
    padding-top: 1rem;
    color: ${FONT_THIRD_COLOR};
  }

  & td:first-child {
    width: 180px;
    text-align: left;
    color: ${FONT_MAIN_COLOR};
  }

  & .active {
    background-color: #f3f3f3;
  }

  & td:nth-child(2) {
    width: 90px;
  }
  & td:nth-child(2),
  td:nth-child(2n + 8) {
    border-right: solid 1px #dfdfdf;
  }
`
