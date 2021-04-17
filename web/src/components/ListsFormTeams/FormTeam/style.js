import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;

  > input {
    flex: 1;
    width: 80%;
    padding: 0.8rem 0.3rem;
    border: none;
    border:1px solid ${props => props.theme.colors.background};

    ::placeholder {
      font-family: 'Raleway', sans-serif;
    }



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

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;

    > input {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    > button {
      width: 100%;
      height: 3rem;
    }
  }
`
