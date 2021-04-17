import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 1124px) {
    display: flex;
  }
`
export const LayoutContent = styled.div`
  width: auto;
`

export const LayoutSession = styled.div`
  width: 100%;
  height: 100%;
`
export const HeaderSession = styled.div`
  height: 4rem;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`
export const BodySession = styled.div`
  height: calc(100% - 4rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};

  @media (min-width: 1124px) {
    height: calc(100% - 4rem);
    width: 100%;
  }
`
