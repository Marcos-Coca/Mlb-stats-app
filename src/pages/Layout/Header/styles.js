import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

import { MAIN_COLOR } from '../../../styles/GlobalStyles'

export const Link = styled(LinkRouter)``

export const Container = styled.header`
  z-index: 1;
  width: 100%;
  color: white;
  font-weight: 700;
  position: relative;
  text-align: center;
  background: ${MAIN_COLOR};
  box-shadow: 1px 0 5px #000;
`

export const Nav = styled.nav`
  display: flex;
  padding-bottom: 8px;
  justify-content: space-around;
`

export const Image = styled.img`
  margin: 0.8rem;
  min-height: 40px;
  max-height: 40px;
  border-radius: 5px;
`