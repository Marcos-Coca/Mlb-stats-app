import { createGlobalStyle } from 'styled-components'

export const MAIN_COLOR = '#041E42'
export const SECONDARY_COLOR = '#1F5A97'

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
    color: #222222;
    margin: 0 auto;
    background: #ECECEC;
    overscroll-behavior: none;
  }
`
