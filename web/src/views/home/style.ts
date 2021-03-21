import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  text-transform: uppercase;
`
export const Body = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`

export const StackSection = styled.div`
  flex: 1;
  height: 20rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.white};
  border-radius: 1rem;
  padding: 1rem;

  h3 {
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
  }

  img {
    width: 90%;
    height: auto;
  }

  > a {
    border: none;
    padding: 0.5rem 1.5rem;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.white} !important;
    text-decoration: none !important;
  }
`
