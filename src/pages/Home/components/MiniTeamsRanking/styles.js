import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { FONT_SECOND_COLOR, THIRD_COLOR } from 'Styles/GlobalStyles'

export const Container = styled.section`
  background: #fff;
`

export const Section = styled.div`
  width: 90%;
  margin: 1rem auto;
  & button,
  h3 {
    cursor: pointer;
    font-weight: 700;
    font-size: 0.875rem;
    color: ${FONT_SECOND_COLOR};
  }

  & h3 {
    margin: 0;
    padding-top: 10px;
    font-size: 1.5rem;
  }
`
export const Link = styled(RouterLink)`
  display: inline-block;
  margin-bottom: 1.5rem;

  & :after {
    content: ' \\00BB';
  }
`

export const Divisions = styled.div`
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: repeat(3, 1fr);
  & button {
    height: 50px;
    border-radius: 2px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #d2d2d2;
    text-shadow: 0 1px 0 #fff;
  }
  & .active {
    background: #ececec;
  }

  & button:hover {
    background: #ececec;
  }
`
export const Leagues = styled.div`
  height: 40px;
  display: flex;
  margin-bottom: 1rem;
  & button {
    width: 50%;
    border-bottom: 1px solid #d2d2d2;
    border-top: 1px solid #d2d2d2;
  }
  & .active {
    border-bottom: 0.25rem solid ${THIRD_COLOR};
  }
`
