import React from 'react'

import Header from './Header'
import Footer from './Footer'

import styled from 'styled-components'

const Container = styled.div`
  min-height: 90vh;
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
