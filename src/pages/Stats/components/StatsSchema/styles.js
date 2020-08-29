import styled from 'styled-components'
import { MAIN_COLOR, FONT_OFF_COLOR } from 'Styles/colors'

export const Tr = styled.tr`
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  z-index: 1000;
  background: #fff;
  position: fixed;
  overflow-x: scroll;
  align-items: center;
  box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & th {
    width: 50px;
    height: 30px;
    flex-shrink: 0;
    overflow: hidden;
    text-align: center;
    margin-left: 15px;
    border-radius: 15px;
    border: solid 1px #dfdfdf;
  }

  & button {
    width: 100%;
    height: 100%;
    color: #414141;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
  }

  & .active {
    background: ${MAIN_COLOR};
    & button {
      color: #fff;
    }
  }

  @media (min-width: 500px) {
    border: none;
    height: auto;
    overflow: visible;
    box-shadow: none;
    position: static;
    display: table-row;
    border-bottom: solid 1px #dfdfdf;

    & th {
      height: 20px;
      border: none;
    }

    & th:first-child {
      text-align: left;
      padding-left: 0.5rem;
    }

    & button,
    th {
      border-radius: 0;
      font-weight: 800;
      font-size: 0.75rem;
      color: ${FONT_OFF_COLOR};
    }

    & .active {
      background-color: #f3f3f3;
      & button {
        color: #000;
      }
    }
  }
`
