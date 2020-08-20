import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`
