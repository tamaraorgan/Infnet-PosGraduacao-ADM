import styled from 'styled-components'

export const FormListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;

  input {
    flex: 1;
    border: 1px solid ${props => props.theme.colors.background};
    outline: none;
    box-sizing: border-box;
    padding-left: 0.5rem;
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.colors.secundary};
  }
  .buttons {
    width: 6rem;
    border: 1px solid ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      border: none;
      cursor: pointer;
      background-color: transparent;

      svg {
        font-size: 1.3rem;
        color: ${props => props.theme.colors.primary};

        :hover {
          color: ${props => props.theme.colors.secundary};
        }
      }
    }
  }
`
