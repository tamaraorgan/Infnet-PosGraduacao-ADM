import styled from 'styled-components'
import { shade } from 'polished'

export const SignInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.colors.primary};
  h1 {
    color: ${props => props.theme.colors.text};
    margin: 3rem 0 1rem 0;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  form {
    width: 90%;
    border-radius: 10px;

    padding: 0.8rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        color: ${props => props.theme.colors.secundary};
        font-family: 'Raleway', sans-serif;
        margin-right: 0.3rem;
      }
      input {
        margin-right: 1.5rem;
        :last-child {
          margin-right: 0rem;
        }
      }
    }

    .inputDiv {
      width: 100%;
      height: 2rem;
      margin-bottom: 0.8rem;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.white};
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        height: 100%;
        margin: 0 0.5rem;
        color: ${props => props.theme.colors.primary};
        font-size: 0.8rem;
      }

      input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        ::placeholder {
          width: 100%;
          height: 100%;
          color: ${props => props.theme.colors.secundary};
          font-family: 'Raleway', sans-serif;
        }
      }
    }
  }
  button {
    border: none;
    background: ${props => props.theme.colors.secundary};
    padding: 0.5rem 2.5rem;
    color: ${props => props.theme.colors.white};
    margin: 0.7rem 0;
    font-family: 'Raleway', sans-serif;

    :hover {
      background-color: ${shade(0.2, '#144052')};;
    }
  }

  p {
    color: ${props => props.theme.colors.secundary};
    margin-top: 0.5rem;

    a {
      color: ${props => props.theme.colors.red};

      :hover {
        color: ${shade(0.2, '#e3624c')};
      }
    }
  }

  img {
    position: absolute;
    right: 1rem;
    bottom: 4rem;
  }

  @media (min-width: 1224px) {
    width: 60%;
    min-height: 20rem;
    height: 60%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;

    h1 {
      color: ${props => props.theme.colors.white};
      font-size: 2.8rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .inputDiv {
        width: 60%;
      }
    }
    img {
      bottom: 0rem;
    }
  }
  @media (min-width: 1324px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      width: 42%;
      height: 30%;

      input {
        width: 100%;
      }
    }
  }
`
