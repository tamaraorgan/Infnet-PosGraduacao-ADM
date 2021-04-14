import styled from "styled-components"

export const List = styled.div`
  margin-top: 2rem;
`
export const TableTitle = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    width: 100%;
    display: flex;
    background: ${props => props.theme.colors.primary};
  }

  th {
    flex: 1;
    text-align: center;
    font-weight: 500;
    padding: 0.8rem 0;
    border: 1px solid ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textTitle};
    font-size: 0.9rem;
    :last-child {
      max-width: 6rem;
    }
  }

  @media (max-width: 576px) {
    th {
      width: 12rem;
    }
    :last-child {
      width: 6rem;
    }
  }
`

export const TableBody = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    width: 100%;
    display: flex;
    border: none;
  }
  td {
    flex: 1;
    padding: 0.8rem 0.5rem;
    border: none;
    border: 1px solid ${props => props.theme.colors.tertiary};
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

        svg {
          color: ${props => props.theme.colors.primary};
          font-size: 1rem;

          :hover {
            color: ${props => props.theme.colors.secundary};
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    td {
      width: 12rem;
    }
    :last-child {
      width: 6rem;
    }
  }
`
