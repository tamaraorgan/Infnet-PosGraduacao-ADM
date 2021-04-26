import styled from 'styled-components'

export const List = styled.div`
  width: 100%;
  margin-top: 2rem;
  background: ${props => props.theme.colors.white};

  p {
    width: 100%;
    background: ${props => props.theme.colors.background};
  }
  @media (max-width: 400px) {
    overflow-x: scroll;
  }
`
export const ListTitle = styled.div`
  width: 100%;
  display: flex;
  height: 2.5rem;
  background-color: ${props => props.theme.colors.primary};

  p {
    flex: 1;
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    width: 6rem;
    border: 1px solid ${props => props.theme.colors.background};
  }
`
export const ListBody = styled.div`
  width: 100%;
  border-collapse: collapse;

  tr {
    width: 100%;
    display: flex;
  }
  td {
    flex: 1;
    padding: 0.7rem 0.5rem;
    border: none;
    border: 1px solid ${props => props.theme.colors.background};
    font-size: 0.9rem;
    :last-child {
      max-width: 5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        background: none;
        border: none;
        outline: none;
      }
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 1.3rem;

        :hover {
          color: ${props => props.theme.colors.secundary};
        }
      }
    }
  }
`
export const ListItemForm = styled.div``
