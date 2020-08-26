import React, { useState, useEffect } from 'react'

import useNearScreen from 'Hooks/useNearScreen'
import getPlayer from 'Services/getPlayer'

import PlayerStats from './PlayerStats'
import TeamStats from './TeamStats'

import { Li, ImageContainer } from './styles'

function StatsTableMobile({ teams, stats, sortBy, requiredStats }) {
  const [show, element] = useNearScreen({})
  const [info, setInfo] = useState({})

  useEffect(() => {
    show && getInfo()
  }, [show, stats])

  const getInfo = () => {
    setInfo({})
    requiredStats === 'Players' && getPlayer(stats.PlayerID).then(setInfo)

    requiredStats === 'Teams' &&
      setInfo(teams.find(team => team.TeamID === stats.TeamID))
  }

  return (
    <Li ref={element}>
      {show && (
        <>
          <div>
            <ImageContainer>
              <img src={info.WikipediaWordMarkUrl || info.PhotoUrl} />
            </ImageContainer>
            {requiredStats === 'Players' ? (
              <PlayerStats stat={stats[sortBy]} player={info} />
            ) : (
              <TeamStats team={info} stat={stats[sortBy]} />
            )}
          </div>
        </>
      )}
    </Li>
  )
}

export default StatsTableMobile
