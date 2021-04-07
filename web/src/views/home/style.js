import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Body = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 1rem;
  }
`

export const StackSection = styled.div`
  display: flex;
  width: 90%;
  height: 20rem;

  @media (max-width: 576px) {
    height: 90%;
    width: 90%;
    flex-direction: column;
  }

  @media (min-width: 1800px) {
    height: 30rem;
  }
`
