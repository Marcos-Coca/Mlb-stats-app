import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 10px;
  display: inline-block;

  & h2 {
    cursor: pointer;
    color: #c2c2c2;
    font-size: 2rem;
    font-weight: 800;
  }

  & .active {
    color: #0048ab;
  }
`
