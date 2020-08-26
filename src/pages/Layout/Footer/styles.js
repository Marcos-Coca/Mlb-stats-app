import styled from 'styled-components'

export const Container = styled.footer`
  color: #fff;
  z-index: 2000;
  font-size: 20px;
  margin-top: 1rem;
  position: relative;
  padding: 1.5rem 0.5rem;
  background: rgb(51, 51, 51);

  @media (min-width: 1024px) {
    display: flex;
    font-size: 24px;
    justify-content: space-evenly;
  }

  & div {
    padding: 5px 0;
    text-align: center;
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  @media (min-width: 1024px) {
    width: 60%;
  }
`
