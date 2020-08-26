import styled from 'styled-components'

export const Container = styled.div`
  margin: 15px 0;
  margin-left: 10px;
  display: inline-block;

  & button {
    border: none;
    color: #888888;
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
    background: #00519f;
    border-radius: 1.5px;
  }
`
