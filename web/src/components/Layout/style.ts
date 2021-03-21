import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
export const Content = styled.div``
export const Section = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
`
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
