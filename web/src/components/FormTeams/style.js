import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    height: 2.5rem;
    width: 8rem;
    border: 1.5px solid ${props => props.theme.colors.background};
    padding-left: 0.5rem;

    ::placeholder {
      color: ${props => props.theme.colors.primary};
      font-family: 'Raleway', sans-serif;
    }
  }

  button {
    border: 1px solid ${props => props.theme.colors.tertiary};
    border-radius: 0px;
    background-color: ${props => props.theme.colors.primary};
    width: 6rem;
    height: 2.5rem;
    color: ${props => props.theme.colors.white};
    margin: 0;
    padding: 0;

    svg {
      font-size: 1rem;
    }
  }
`