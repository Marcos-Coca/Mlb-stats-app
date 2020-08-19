import styled from 'styled-components'
import { SECONDARY_COLOR } from '../../../styles/GlobalStyles'

export const Tr = styled.tr`
  vertical-align: middle;
  border-bottom: 1px solid #d2d2d2;

  & td {
    text-align: center;
  }
  & td:first-child {
    border-right: 1px solid #d2d2d2;
    text-align: initial;
  }
`

export const Team = styled.span`
  display: flex;
  align-items: center;
  color: ${SECONDARY_COLOR};

  & span {
    padding-left: 0.7rem;
  }
  & img {
    height: 24px;
    width: 24px;
  }
`
