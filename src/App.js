import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import { GamesContextProvider } from './context/GamesContext'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GamesContextProvider>
          <Route path="/" component={Home} />
        </GamesContextProvider>
      </Switch>
    </BrowserRouter>
  )
}
