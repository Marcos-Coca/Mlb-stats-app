import React from 'react'

import Header from 'Components/Layout/Header'
import Footer from 'Components/Layout/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
