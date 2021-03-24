import styled from "styled-components";
import { shade } from 'polished'

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.modal};
  display: ${props => (props.isShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

export const SectionModal = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 50%;
  height: 40%;
  display: flex;
  padding: 2rem;
`
export const BodyModal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.lineGray};
  padding: 0.4rem;
  margin-left: 0.2rem;

  header {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    color: ${props => props.theme.colors.red};
  }
  main {
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-align: center;
  }
`
export const ButtonModal = styled.div`
  button {
    border: none;
    margin: 0.3rem;
    padding: 0.5rem 2rem;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.white};

    :first-child {
      background-color: ${props => props.theme.colors.red};
      :hover {
        background-color: ${shade(0.2, '#e3624c')};
      }
    }
    :hover {
      background-color: ${shade(0.2, '#779d98')};
    }
  }
`
