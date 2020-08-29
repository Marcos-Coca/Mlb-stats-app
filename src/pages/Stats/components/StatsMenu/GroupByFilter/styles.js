import styled from 'styled-components'
import { SECONDARY_COLOR, FONT_OFF_COLOR } from 'Styles/colors'

export const Container = styled.div`
  margin: 15px 0;
  margin-left: 10px;
  display: inline-block;

  & button {
    border: none;
    color: ${FONT_OFF_COLOR};
    font-weight: 700;
    font-size: 1.25rem;
    position: relative;
  }

  & .active {
    color: #414141;
  }

  & .active::after {
    content: ' ';
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    position: absolute;
    background: ${SECONDARY_COLOR};
    border-radius: 1.5px;
  }
`
