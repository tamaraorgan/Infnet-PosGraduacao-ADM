import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const RegisterSection = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 35%;
    position: absolute;
    bottom: 0;
    right: 3rem;
  }

  form {
    width: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 0.5rem;
    margin: 0.5rem;

    h4 {
      margin-bottom: 1.7rem;
      color: ${props => props.theme.colors.primary};
      font-weight: 400;
    }
    input {
      border: none;
      background: ${props => props.theme.colors.white};
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      outline: none;
      margin-bottom: 0.7rem;
      ::placeholder {
        color: ${props => props.theme.colors.primary};
        font-family: 'Raleway', sans-serif;
      }
      :focus {
        border: 2px solid ${props => props.theme.colors.red};
      }
    }
    button {
      border: none;
      background: ${props => props.theme.colors.primary};
      padding: 0.5rem 2.5rem;
      color: ${props => props.theme.colors.white};
      margin: 0.7rem 0;
      font-family: 'Raleway', sans-serif;
    }
  }
`
