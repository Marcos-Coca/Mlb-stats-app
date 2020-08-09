import styled from 'styled-components'

export const TeamLogo = styled.div`
  width: 90px;
  height: 100%;

  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  &::after {
    border-top: 71px solid transparent;
    content: '';
    border-bottom: 0 solid transparent;
    border-right: 20px solid #f7f7f7;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 71px;
  overflow: hidden;
`

export const Player = styled.img`
  width: 53px;
  max-height: 71px;
`
export const Article = styled.article`
  width: 90%;
  margin: auto;
  margin-top: 15px;
`
export const PlayerInfo = styled.div``
