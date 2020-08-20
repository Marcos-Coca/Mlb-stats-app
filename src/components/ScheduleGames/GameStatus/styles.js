import styled from 'styled-components'

import { FONT_SECOND_COLOR } from '../../../styles/GlobalStyles'

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
    background: rgb(255, 168, 1);
  }
`

export const Runners = styled.div`
  display: flex;
  & div {
    width: 12px;
    height: 12px;
    border-radius: 1.5px;
    transform: rotate(45deg);
    border: 2px solid ${FONT_SECOND_COLOR};
  }

  & div:nth-child(2) {
    bottom: 12px;
    position: relative;
  }
`
