import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const BodyLayout = styled.body`
  width: 100vw;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  @media (max-width: 576px) {
    height: auto;
    overflow-y: scroll;
  }
`
export const SectionLayout = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    height: auto;
    overflow-y: scroll;
  }
`
