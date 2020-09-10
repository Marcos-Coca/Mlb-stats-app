import usePlayer from '../../../../hooks/usePlayer'

export default function useFinalPitchers({ game }) {
  const season = game.Season
  const [winningPitcher, winningPitcherLoading] = usePlayer({
    playerID: game.WinningPitcherID,
    season,
  })
  const [losingPitcher, losingPitcherLoading] = usePlayer({
    playerID: game.LosingPitcherID,
    season,
  })
  const [savingPitcher, savingPitcherLoading] = usePlayer({
    playerID: game.SavingPitcherID,
    season,
  })

  const pitchers = [
    { W: winningPitcher },
    { L: losingPitcher },
    { SV: savingPitcher },
  ]

  const loading =
    winningPitcherLoading || losingPitcherLoading || savingPitcherLoading

  return { pitchers, loading }
}
