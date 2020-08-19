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
  const { team } = useTeams(TeamID)
  const [player, setPlayer] = useState('')
  const borderColor = `#${team.PrimaryColor}`

  useEffect(() => {
    getPlayer(PlayerID).then(setPlayer)
  }, [])

  return (
    <Article>
      <Header style={{ borderColor }}>
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
        {/* <p>{Content.substring(0, 200) + '...'}</p> */}
        <p>{Content}</p>
      </div>
    </Article>
  )
}
