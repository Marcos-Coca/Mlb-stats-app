import styled from 'styled-components'
import { FONT_SECOND_COLOR, FONT_MAIN_COLOR } from 'Styles/GlobalStyles'

export const Container = styled.div`
  text-align: center;
  color: ${FONT_SECOND_COLOR};

  & .active {
    color: ${FONT_MAIN_COLOR};
  }
`
