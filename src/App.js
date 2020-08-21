import React from 'react'
import Home from 'Pages/Home'
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
              <Route exact path="/" component={() => <div>Home</div>} />
              <Route path="/standings" component={Standings} />
            </GamesContextProvider>
          </TeamsContextProvider>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
