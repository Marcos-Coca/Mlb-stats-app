import React from 'react'
import Home from './pages/Home/Home'
import Layout from 'Components/Layout'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GamesContextProvider } from './context/GamesContext'
import { TeamsContextProvider } from './context/TeamsContext'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <TeamsContextProvider>
            <GamesContextProvider>
              <Route path="/" component={Home} />
            </GamesContextProvider>
          </TeamsContextProvider>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
