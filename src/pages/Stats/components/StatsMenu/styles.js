import styled from 'styled-components'
import { MAIN_COLOR } from 'Styles/GlobalStyles'

export const SortMenu = styled.div`
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

  & div {
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
    font-size: 1rem;
    font-weight: 700;
  }

  & .active {
    color: #fff;
    background: ${MAIN_COLOR};
  }
`
