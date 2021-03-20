import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100% + 4rem);
`
export const Title = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textTitle};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
`
export const Body = styled.div`
  width: 100%;
  height: calc(100% + 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`
