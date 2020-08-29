import styled from 'styled-components'

import { FONT_OFF_COLOR } from 'Styles/colors'

export const Tr = styled.tr`
  display: flex;
  color: #1d1d1d;
  min-height: 60px;
  max-height: 60px;
  font-weight: 600;
  align-items: center;
  border-bottom: 2px solid #efefef;
  & th {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
export const Header = styled.tr`
  color: ${FONT_OFF_COLOR};
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 15px;
  & th {
    text-align: left;
    padding-left: 10px;
  }
`

export const ImageContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
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

  & > div {
    text-align: left;
  }

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
