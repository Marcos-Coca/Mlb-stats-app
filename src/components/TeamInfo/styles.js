import styled from 'styled-components'

export const TeamLogo = styled.img`
  width: 20px;
  height: 20px;
`
export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 30px;
  grid-gap: 10px;
`
export const Info = styled.div`
  margin-left: 10px;

  & img {
    margin-right: 8px;
  }
`
