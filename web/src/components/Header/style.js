import styled from 'styled-components'

export const SectionHeader = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textTitle};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  right: 0;
`

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
`
export const SectionInfo = styled.div`
  font-size: 1rem;
  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`
