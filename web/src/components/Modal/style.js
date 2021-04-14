import styled from "styled-components";


export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.modal};
`

export const ModalSession = styled.div`
  width: 50rem;
  height: 20rem;
  background-color: ${props => props.theme.colors.white};
`