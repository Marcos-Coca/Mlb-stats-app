import styled from 'styled-components'

export const Th = styled.th`
  padding: 5px;
  height: 32px;
  font-weight: 500;

  & span {
    border-bottom: 1px dotted;
  }

  &:first-of-type span {
    border-bottom: 0;
    padding-left: 0.7rem;
  }
  &:first-of-type {
    text-align: initial;
  }
`
