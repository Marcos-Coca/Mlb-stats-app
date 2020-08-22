import styled from 'styled-components'

export const Th = styled.th`
  padding: 5px;
  height: 32px;
  font-weight: 500;

  & div {
    display: inline;
    position: relative;
    border-bottom: 1px dotted;
  }

  & div:hover span {
    visibility: visible;
    opacity: 1;
  }

  &:first-of-type div {
    border-bottom: 0;
    position: relative;
    padding-left: 0.7rem;
  }
  &:first-of-type {
    text-align: initial;
  }

  & div span {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  & div span::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`
