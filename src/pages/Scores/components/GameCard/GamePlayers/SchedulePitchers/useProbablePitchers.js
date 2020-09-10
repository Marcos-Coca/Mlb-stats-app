import usePlayer from '../../../../hooks/usePlayer'

export default function useProbablePitchers({
  Season,
  AwayTeamProbablePitcherID,
  HomeTeamProbablePitcherID,
}) {
  const [awayPitcher, awayLoading] = usePlayer({
    season: Season,
    playerID: AwayTeamProbablePitcherID,
  })
  const [homePitcher, homeLoading] = usePlayer({
    season: Season,
    playerID: HomeTeamProbablePitcherID,
  })

  const pitchers = [awayPitcher, homePitcher]

  return { pitchers, loading: awayLoading || homeLoading }
}
