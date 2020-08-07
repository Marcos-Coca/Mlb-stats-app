import React from 'react'
import Home from './pages/Home/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GamesContextProvider } from './context/GamesContext'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <GamesContextProvider>
          <Route path="/" component={Home} />
        </GamesContextProvider>
      </Switch>
    </BrowserRouter>
  )
}
