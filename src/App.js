import React from 'react'
import Home from 'Pages/Home'
import Stats from 'Pages/Stats'
import Layout from 'Pages/Layout'
import Standings from 'Pages/Standings'
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
              <Route exact path="/" component={Home} />
              <Route path="/standings" component={Standings} />
            </GamesContextProvider>
            <Route path="/stats" component={Stats} />
          </TeamsContextProvider>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
