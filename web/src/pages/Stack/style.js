import styled from 'styled-components'

export const StackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
export const CardStack = styled.div`
  height: 20rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secundary};
  }

  img {
    width: 80%;
  }

  a {
    text-decoration: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    width: 8rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`
