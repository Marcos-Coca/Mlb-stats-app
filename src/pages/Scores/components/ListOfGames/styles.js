import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-gap: 1rem;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

  @media (max-width: 500px) {
    grid-gap: 0;
    margin-top: 0;
    grid-template-columns: repeat(2, 1fr);
  }
`
