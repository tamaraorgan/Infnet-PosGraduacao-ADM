import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;

  > input {
    flex: 1;
    width: 80%;
    padding: 0.8rem 0.3rem;

  }
  > button {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textTitle};
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
  }
`