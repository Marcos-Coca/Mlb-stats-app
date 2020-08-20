import styled from 'styled-components'

export const Container = styled.div`
  color: rgb(102, 102, 102);
  font-size: 10px;
  padding: 0 4px;
  line-height: 12px;
  margin-top: 4px;
  margin-bottom: 4px;

  @media (min-width: 1024px) {
    width: 30%;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #ececec;
  }
`

export const Info = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
`
