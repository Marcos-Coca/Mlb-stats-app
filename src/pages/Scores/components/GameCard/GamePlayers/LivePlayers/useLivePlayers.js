import { format } from 'date-fns'

import usePlayer from '../../../../hooks/usePlayer'
import usePlayerGameStats from '../../../../hooks/usePlayerGameStats'

export default function useLivePlayers({ game }) {
  const season = game.Season
  const date = format(new Date(game.Day), 'yyyy-MMM-dd')

  const [currentHitter = {}] = usePlayer({
    season,
    playerID: game.CurrentHitterID,
  })
  const currentHitterStats = usePlayerGameStats({
    playerID: game.CurrentHitterID,
    date,
  })

  const [pitcherHitter = {}] = usePlayer({
    season,
    playerID: game.CurrentPitcherID,
  })
  const pitcherHitterStats = usePlayerGameStats({
    playerID: game.CurrentPitcherID,
    date,
  })

  const players = {
    pitcher: { stats: pitcherHitter, gameStats: pitcherHitterStats },
    hitter: { stats: currentHitter, gameStats: currentHitterStats },
  }
  return players
}
