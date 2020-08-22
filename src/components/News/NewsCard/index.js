import React, { useEffect, useState } from 'react'
import useTeams from 'Hooks/useTeams'
import getPlayer from 'Services/getPlayer'
import {
  TeamLogo,
  Header,
  Player,
  Article,
  PlayerInfo,
  Container,
} from './styles'

export default function NewsCard({ Title, Content, PlayerID, TeamID }) {
  const { team = {}, loading } = useTeams(TeamID)
  const [player, setPlayer] = useState('')

  useEffect(() => {
    PlayerID && getPlayer(PlayerID).then(setPlayer)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Article>
      <Header borderColor={team.PrimaryColor}>
        <Container>
          <TeamLogo>
            {TeamID && <img src={team.WikipediaWordMarkUrl} alt={team.Name} />}
          </TeamLogo>

          <PlayerInfo>
            <div>
              {player.FirstName} {player.LastName}
            </div>
            <div>
              {player.Position} {team.City} {team.Name}
            </div>
          </PlayerInfo>
        </Container>

        <Player src={player.PhotoUrl} />
      </Header>
      <div>
        <h3>{Title}</h3>
        <p>{Content}</p>
      </div>
    </Article>
  )
}
