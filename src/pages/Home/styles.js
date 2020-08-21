import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas:
      'MiniScoreBoard News MiniTeamsRanking'
      'MiniScoreBoard News MiniTeamsRanking'
      '... News ...';

    grid-template-columns: 1fr 2fr 1fr;
    grid-column-gap: 1rem;
    justify-items: center;

    & .MiniScoreBoard {
      grid-area: MiniScoreBoard;
    }
    & .MiniTeamsRanking {
      width: 100%;
      grid-area: MiniTeamsRanking;
    }

    & .News {
      grid-area: News;
    }
  }
`
