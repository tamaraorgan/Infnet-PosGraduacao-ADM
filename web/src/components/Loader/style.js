import styled from 'styled-components'

export const Loading = styled.div`
  border: 0.3rem solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  border-top: 0.3rem solid ${props => props.theme.colors.tertiary};
  width: 2.5rem;
  height: 2.5rem;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
