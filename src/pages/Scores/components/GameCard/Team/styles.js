import styled from 'styled-components'

import { FONT_OFF_COLOR } from 'Styles/colors'

export const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const Team = styled.div`
  padding: 5px 0;
  & > div {
    display: flex;
    align-items: center;
  }
`
export const Name = styled.span`
  margin-right: 5px;
  font-weight: 700;

  & + span {
    font-size: 13px;
    color: ${FONT_OFF_COLOR};
  }

  @media (max-width: 500px) {
    & + span {
      display: block;
    }
  }
`
