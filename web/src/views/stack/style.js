import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Body = styled.div`
  width: 85%;
  margin-top: 4rem;

  @media (max-width: 576px) {
    min-height: calc(100vh - 8rem);
    overflow-x: scroll;
  }
`
