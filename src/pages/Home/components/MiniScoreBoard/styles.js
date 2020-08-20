import styled from 'styled-components'

export const Image = styled.img`
  width: 95%;
  border-radius: 6px;
  margin: 1em auto;
  display: block;
  @media (min-width: 1440px) {
    width: 90%;
  }
`

export const Container = styled.div`
  font-weight: 700;
  margin: auto;
  @media (min-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 1440px) {
    width: 90%;
  }
`
