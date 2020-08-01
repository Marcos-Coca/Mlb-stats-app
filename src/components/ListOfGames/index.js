import React, { useState, useEffect } from 'react'
import moment from 'moment'
import getSchedulesGames from '../../services/getSchedulesGames'

export default function ({ date }) {
  const [games, setGames] = useState([])
  const currentDate = moment(date).format('YYYY-MMM-D')

  useEffect(
    function () {
      // getSchedulesGames(currentDate).then(setGames)
    },
    [currentDate]
  )

  console.log(games)

  return <div></div>
}
