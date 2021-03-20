import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.colors.modal};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const ModalSection = styled.div`
  width: 30rem;
  height: 10rem;
  margin-top: 4rem;
  background: ${props => props.theme.colors.white};
  border-radius: 0.8rem;
  padding: 1rem;
`
export const ModalHeader = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};
`
export const ModalBody = styled.div`
  flex: 1;
  padding: 1rem 0;
`
