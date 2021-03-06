import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

import { MAIN_COLOR } from 'Styles/colors'

export const Link = styled(LinkRouter)``

export const Container = styled.header`
  width: 100%;
  color: white;
  z-index: 2000;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  text-align: center;
  background: ${MAIN_COLOR};
  box-shadow: 1px 0 5px #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Nav = styled.nav`
  width: 60%;
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
