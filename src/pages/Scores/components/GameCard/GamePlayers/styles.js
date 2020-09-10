import styled from 'styled-components'

import { FONT_THIRD_COLOR, FONT_OFF_COLOR } from 'Styles/colors'

export const Container = styled.div`
  padding: 10px 0;
  font-weight: 600;
  position: relative;
  font-size: 0.8125rem;
  color: ${FONT_THIRD_COLOR};

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & .players > div:last-child div {
    text-align: right;
  }

  & .players > div:last-child .player {
    flex-direction: row-reverse;
  }

  & .title {
    left: 50%;
    font-size: 11px;
    font-weight: 700;
    margin-left: -20%;
    position: absolute;
    text-transform: uppercase;
    color: ${FONT_OFF_COLOR};
  }
`

export const PlayerImage = styled.div`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  & img {
    width: 35px;
    height: 100%;
    object-fit: cover;
  }

  & + div {
    margin: 0 0.7rem;
  }
`
export const Player = styled.div`
  & .team {
    font-weight: 400;
    color: ${FONT_OFF_COLOR};
  }

  & .team span {
    font-weight: 700;
  }
  & .desicion {
    font-weight: 700;
    color: ${FONT_OFF_COLOR};
  }
  & .player {
    display: flex;
    align-items: center;
  }
  & .player-info div:nth-child(n + 2) {
    font-size: 0.75rem;
  }
  & .pitcher-hand {
    font-weight: normal;
  }

  & .player-info div {
    line-height: 1.5;
  }

  .player-info div:last-child {
    color: ${FONT_OFF_COLOR};
  }
`
