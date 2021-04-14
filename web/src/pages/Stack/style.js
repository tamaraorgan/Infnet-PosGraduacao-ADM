import styled from 'styled-components'

export const StackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardStack = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;

  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }

  img {
    width: 80%;
  }

  a {
    text-decoration: none;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.white};
    width: 8rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`
