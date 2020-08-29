import { createGlobalStyle } from 'styled-components'
import { FONT_MAIN_COLOR, PASIVE_COLOR } from './colors'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: proxima-nova, "open Sans", Helvetica, Arial, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    width: 100%; 
    height: 100vh;
    color:${FONT_MAIN_COLOR} ;
    margin: 0 auto;
    background: ${PASIVE_COLOR};
    overscroll-behavior: none;
  }
  a{
    color:inherit;
    text-decoration: none;
  }
  table{
  border-spacing: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-collapse: collapse;
  }
`
