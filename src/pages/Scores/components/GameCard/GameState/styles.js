import styled from 'styled-components'

import { FONT_SECOND_COLOR, LIVE_COLOR } from 'Styles/colors'

export const GameState = styled.div`
  height: 30px;
  font-weight: 700;
  vertical-align: middle;
  color: ${FONT_SECOND_COLOR};
  border-bottom: dotted 1px rgba(0, 0, 0, 0.1);

  & .live {
    color: ${LIVE_COLOR};
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    height: 10px;
    border: none;
  }
`
