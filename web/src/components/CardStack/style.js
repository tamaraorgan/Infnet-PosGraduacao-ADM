import styled from 'styled-components'

export const ContainerStack = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
    border: none;
    padding: 0.5rem 1.5rem;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.white} !important;
    text-decoration: none !important;
  }

  @media (max-width: 576px) {
    img {
      margin: 2rem 0;
    }
  }

  @media (min-width: 2000px) {
    height: 30rem;

    h3 {
      font-size: 2rem;
    }

    > a {
      padding: 0.8rem 2.5rem;
    }
  }
`
