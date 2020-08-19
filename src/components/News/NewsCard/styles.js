import styled from 'styled-components'

export const TeamLogo = styled.div`
  position: relative;

  & > img {
    width: 90px;
    height: 85px;
    object-fit: cover;
    border-right: 1px solid #f7f7f7;
    border-bottom: 1px solid #f7f7f7;
  }
  &::after {
    content: ' ';
    right: 0;
    position: absolute;
    border-top: 85px solid transparent;
    border-right: 20px solid #f7f7f7;
  }
`
export const Header = styled.header`
  height: 85px;
  display: flex;
  overflow: hidden;
  background: #f7f7f7;
  align-items: center;
  border-top: 2px solid #000;
  justify-content: space-between;
`

export const Player = styled.img`
  width: 53px;
  max-height: 100%;
`
export const Article = styled.article`
  width: 90%;
  margin: auto;
  background: #fff;
  margin-top: 1rem;
  padding: 1rem 0;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const PlayerInfo = styled.div`
  & div:first-child {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
