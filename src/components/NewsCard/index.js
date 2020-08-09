import React, { useEffect, useState } from 'react'
import useTeams from '../../hooks/useTeams'
import getPlayer from '../../services/getPlayer'
import { TeamLogo, Header, Player, Article, PlayerInfo } from './styles'

export default function NewsCard({ Title, Content, PlayerID, TeamID }) {
  const newsTeam = useTeams(TeamID)
  const [player, setPlayer] = useState('')

  useEffect(() => {
    getPlayer(PlayerID).then(setPlayer)
  }, [])

  return (
    <Article>
      <Header>
        <div>
          <TeamLogo>
            <img src={newsTeam.WikipediaWordMarkUrl} alt={newsTeam.Name} />
          </TeamLogo>
          <PlayerInfo>
            <span>
              {player.FirstName} {player.LastName}
            </span>
            <span>
              {`${player.Position}, ${newsTeam.City} ${newsTeam.Name}`}{' '}
            </span>
          </PlayerInfo>
        </div>

        <Player src={player.PhotoUrl} />
      </Header>
      <div>
        <h3>{Title}</h3>
        <p>{Content}</p>
      </div>
    </Article>
  )
}
