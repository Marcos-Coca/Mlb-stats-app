import React, { useState } from 'react'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'

import Header from './components/Header'
import ListOfGames from './components/ListOfGames'

export default function Scores() {
  const history = useHistory()
  const urlDate = history.location.pathname.split('/')[2]
  const currentDate = Date.parse(urlDate) ? new Date(urlDate) : new Date()

  const [date, setDate] = useState(currentDate)

  const changeDate = newDate => {
    setDate(newDate)
    const formatedNewDate = format(new Date(newDate), 'yyyy-MM-dd')
    history.push(`/scores/${formatedNewDate}`)
  }

  return (
    <>
      <Header date={date} setDate={changeDate} />
      <ListOfGames date={date} />
    </>
  )
}
