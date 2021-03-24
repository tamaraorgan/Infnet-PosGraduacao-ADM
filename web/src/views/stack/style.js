import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textTitle};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  text-transform: uppercase;
`
export const Body = styled.div`
  width: 85%;
  margin-top: 4rem;

  @media (max-width: 576px) {
    min-height: calc(100vh - 8rem);
    overflow-x: scroll;
  }
`
