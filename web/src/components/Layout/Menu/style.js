import styled from 'styled-components'

export const MenuContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100%;
`

export const MenuLogo = styled.div`
  display: none;

  @media (min-width: 1124px) {
    display: flex;
    padding-left: 1rem;
    height: 4rem;
    justify-content: space-between;

    img {
      width: 4rem;
    }
  }
`
export const Button = styled.button`
  display: none;

  @media (min-width: 1124px) {
    display: flex;
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: transparent;

    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.3rem;

      :hover {
        color: ${props => props.theme.colors.red};
      }
    }
  }
`

export const MenuLink = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  a {
    flex: 1;
    text-decoration: none;
    border-left: 3px solid transparent;
    color: ${props => props.theme.colors.primary};

    .grupIcon {
      display: flex;
      width: 100%;
    }
    .icon {
      height: 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .description {
      display: none;
    }

    .dropDown {
      width: 100%;

      .down {
        display: ${props => (props.show ? 'flex' : 'none')};
      }
      img {
        height: 1rem;
      }
    }
    .drop {
      display: flex;
      flex-direction: column;
    }

    :hover {
      border-left: 3px solid ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.secundary};
    }
  }
  .active {
    border-left: 3px solid ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.red};
  }

  @media (min-width: 1124px) {
    flex-direction: column;

    a {
      .icon {
        width: 4rem;
      }

      .description {
        width: 10rem;
        padding-left: 0.5rem;
        display: ${props => (props.active ? 'flex' : 'none')};
        align-items: center;
      }
    }
  }
`
