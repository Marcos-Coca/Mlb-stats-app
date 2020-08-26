import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  color: #1d1d1d;
  min-height: 60px;
  max-height: 60px;
  font-weight: 600;
  align-items: center;
  border-bottom: 2px solid #efefef;
  & > div {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-right: 25px;
    justify-content: space-around;
  }
`

export const ImageContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  margin-left: 10px;
  align-items: center;
  & img {
    width: 100%;
    height: 42px;
    border-radius: 50%;
    object-fit: contain;
  }
`

export const Info = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  & .stat {
    color: #444444;
    font-size: 20px;
  }
  & .position,
  .team {
    color: #858585;
  }
  & .position {
    font-size: 12px;
    margin-left: 5px;
  }

  & .team {
    font-size: 14px;
  }
`
