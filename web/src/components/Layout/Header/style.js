import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .namePage {
    text-transform: uppercase;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.secundary};

    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${props => props.theme.colors.secundary};
        margin-left: 0.6rem;
      }
    }
  }
`
