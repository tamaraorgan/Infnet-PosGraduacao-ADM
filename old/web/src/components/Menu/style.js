import styled from 'styled-components'

export const MenuContainer = styled.header`
  height: 100vh;
  width: auto;

  @media (max-width: 576px) {
    width: 100%;
    height: 4rem;
  }
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
  @media (max-width: 576px) {
    display: none;
  }
`
export const MenuItem = styled.nav`
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    border-left: 3px solid transparent;

    :hover {
      border-left: 3px solid ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.secundary};
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
      img {
        width: auto;
        height: 1.2rem;
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
    border-left: 3px solid ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.secundary};
  }

  @media (max-width: 576px) {
    display: flex;
    a {
      flex: 1;
    }
    .description {
      display: none;
    }
  }
`
