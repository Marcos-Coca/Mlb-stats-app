import React, { useState, useEffect } from 'react'

import useTeams from 'Hooks/useTeams'
import getPlayer from 'Services/getPlayer'
import useNearScreen from 'Hooks/useNearScreen'
import useStatsFilters from '../../../../hooks/useStatsFilters'

import PlayerStats from '../PlayerStats'
import TeamStats from '../TeamStats'

import { Tr, ImageContainer } from '../styles'

export default function Stats({ stats }) {
  const [info, setInfo] = useState({})
  const { filters } = useStatsFilters()
  const [show, element] = useNearScreen({})
  const { team } = useTeams(stats.TeamID)

  useEffect(() => {
    show && getInfo()
  }, [show, stats])

  const getInfo = () => {
    setInfo({})
    filters.requiredStats === 'Players' &&
      getPlayer(stats.PlayerID).then(setInfo)

    filters.requiredStats === 'Teams' && setInfo(team)
  }

  return (
    <Tr ref={element}>
      {show && (
        <>
          <th>
            <ImageContainer>
              <img src={info.WikipediaWordMarkUrl || info.PhotoUrl} />
            </ImageContainer>

            {filters.requiredStats === 'Players' ? (
              <PlayerStats stat={stats[filters.sortBy]} player={info} />
            ) : (
              <TeamStats team={info} stat={stats[filters.sortBy]} />
            )}
          </th>
        </>
      )}
    </Tr>
  )
}
