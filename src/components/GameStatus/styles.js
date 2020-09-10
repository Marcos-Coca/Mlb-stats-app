import styled from 'styled-components'

import { FONT_SECOND_COLOR, LIVE_COLOR } from 'Styles/colors'

export const Out = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${FONT_SECOND_COLOR};
  }
`

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  & .active {
    background: ${LIVE_COLOR};
  }
`

export const Runners = styled.div`
  display: flex;
  & div {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    transform: rotate(45deg);
    border: 1.4px solid ${FONT_SECOND_COLOR};
  }

  & div:nth-child(2) {
    bottom: 12px;
    position: relative;
  }
`
