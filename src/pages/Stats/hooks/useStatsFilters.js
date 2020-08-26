import { useContext } from 'react'
import StatsFiltersContext from '../context/StatsFiltersContext'

export default function useStatsFilters() {
  const { state, dispatch, TYPES } = useContext(StatsFiltersContext)

  const setRequiredStats = value =>
    dispatch({ type: TYPES.requiredStats, payload: value })

  const setSortBy = value => dispatch({ type: TYPES.sortBy, payload: value })

  const setGroupBy = value => dispatch({ type: TYPES.groupBy, payload: value })

  return { filters: state, setRequiredStats, setSortBy, setGroupBy }
}
