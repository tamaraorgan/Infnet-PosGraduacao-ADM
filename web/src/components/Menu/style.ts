import styled from 'styled-components'

interface ShowProps {
  show: boolean
}
export const MenuContainer = styled.div`
  height: 100vh;
  width: auto;
`
export const MenuTitle = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  border: 1px solid ${props => props.theme.colors.lineGray};
  .image {
    width: 13rem;
    flex: 1;
    padding-left: 0.5rem;
  }
  button {
    width: 3rem;
    height: 3rem;
    border: none;
    background: none;
    :focus {
      outline: none !important;
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
  svg {
    font-size: 1.3rem;
    color: ${props => props.theme.colors.primary};
  }
`
export const MenuItem = styled.nav<ShowProps>`
  a {
    color: ${props => props.theme.colors.text};
    display: flex;
    cursor: pointer;

    :hover {
      color: ${props => props.theme.colors.tertiary};
    }
    .button {
      background: none;
      border: none;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 1.3rem;
      }
    }
    .description {
      display: ${props => (props.show ? 'flex' : 'none')};
      width: 70%;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.25rem;
    }
  }
  .active {
    svg {
      color: ${props => props.theme.colors.tertiary} 
    }
  }
`
