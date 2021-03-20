import styled from 'styled-components'

export const List = styled.div`
  width: 100%;
  margin-top: 2rem;
  background: ${props => props.theme.colors.white};

  p {
    width: 100%;
    background: ${props => props.theme.colors.background};
  }
`
export const TableTitle = styled.div`
  background: ${props => props.theme.colors.primary};

  tr {
    width: 100%;
    display: flex;
  }
  th {
    flex: 1;
    text-align: center;
    border: 1px solid ${props => props.theme.colors.lineGray};
    font-weight: 500;
    padding: 0.8rem 0;
    color: ${props => props.theme.colors.textTitle};
    :last-child {
      max-width: 6rem;
    }
  }
`
export const TableBody = styled.div`
  tr {
    width: 100%;
    display: flex;
  }
  td {
    flex: 1;
    padding: 0.8rem 0.5rem;
    border: 1px solid ${props => props.theme.colors.background};
    :last-child {
      max-width: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        background: none;
        border: none;
        outline: none;
      }
      svg {
        color: ${props => props.theme.colors.text};

        :hover {
          color: ${props => props.theme.colors.secundary};
        }
      }
    }
  }
`

