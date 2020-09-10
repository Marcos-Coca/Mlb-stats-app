import styled from 'styled-components'
import { FONT_SECOND_COLOR, FONT_THIRD_COLOR } from 'Styles/colors'

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.8125rem;

  & .game-status {
    width: 70px;
    height: 70px;
    padding-right: 1rem;
  }

  @media (max-width: 500px) {
    & > div:first-child {
      width: auto;
      height: auto;
      line-height: 2;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 500px) and (min-width: 350px) {
    width: 50%;
    height: 100%;
    justify-content: space-around;
    & .game-status {
      width: auto;
      padding-right: 0;
      align-self: start;
    }
  }
`
export const Inning = styled.div`
  font-size: 0.8125rem;
  color: ${FONT_SECOND_COLOR};
`

export const Border = styled.div`
  width: 1px;
  height: 78px;
  margin: 0 18px;
  background: rgba(0, 0, 0, 0.1);
  display: ${props => `${props.Status === 'InProgress' ? 'initial' : 'none'}`};
`
