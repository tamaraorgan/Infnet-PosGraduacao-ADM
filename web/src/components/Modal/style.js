import styled from "styled-components";
import { shade } from 'polished'

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.modal};
`

export const ModalSession = styled.div`
  width: 40rem;
  height: 20rem;
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .modal-body {
    height: 70%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid ${props => props.theme.colors.secundary};
    background-color: transparent;

    h4 {
      color: ${props => props.theme.colors.red};
      letter-spacing: 1.4px;
      font-size: 2rem;
    }

    p {
      background-color: transparent;
      strong {
        color: ${props => props.theme.colors.red};
      }
    }
  }
  .modal-button {
    button {
      color: ${props => props.theme.colors.white};
      border: none;
      width: 6rem;
      height: 2.5rem;
      margin: 0.5rem;
    }

    .confirm {
      background-color: ${props => props.theme.colors.secundary};
      :hover {
        background-color: ${shade(0.2, '#779d98')};
      }

    }
    .delete {
      background-color: ${props => props.theme.colors.red};
      :hover {
        background-color: ${shade(0.2, '#e3624c')};
      }
      
    }
  }
`
