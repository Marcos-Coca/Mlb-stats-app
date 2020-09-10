import styled from 'styled-components'

export const GameCard = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 7px 1px;
  @media (max-width: 500px) {
    border-radius: 0;
    box-shadow: none;
    border-right: 1px solid rgb(223, 223, 223);
    border-bottom: 1px solid rgb(223, 223, 223);
    border-top: 1px solid rgb(223, 223, 223);
  }

  @media (max-width: 500px) {
    padding: 10px 5px;
  }
`
export const Game = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
  border-bottom: dotted 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 500px) {
    border: none;
  }
`
