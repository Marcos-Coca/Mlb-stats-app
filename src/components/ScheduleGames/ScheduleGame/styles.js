import styled from 'styled-components'

export const Container = styled.li`
  background: #ffff;
  border-width: 1px 1px 1px 0;
  border-color: #dfdfdf;
  border-style: solid;
  flex-shrink: 0;
  font-size: 14px;
  color: rgba(34, 34, 34);
  height: 76px;
  width: 125px;

  @media (min-width: 1024px) {
    width: 90%;
    min-width: 265px;
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`
export const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 1024px) {
    width: 68%;
  }
`
