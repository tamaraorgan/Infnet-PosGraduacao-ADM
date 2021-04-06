import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const RegisterSection = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 70%;
  }

  form {
    width: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 0.5rem;
    margin: 0.5rem;

    h4 {
      margin-bottom: 1.7rem;
      color: ${props => props.theme.colors.primary};
    }

    input {
      border: none;
      background: ${props => props.theme.colors.white};
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      outline: none;
      margin-bottom: 0.7rem;
      ::placeholder {
        color: ${props => props.theme.colors.primary};
      }
      :focus {
        border: 2px solid ${props => props.theme.colors.red};
      }
    }
    button {
      border: none;
      background: ${props => props.theme.colors.primary};
      padding: 0.5rem 2.5rem;
      color: ${props => props.theme.colors.white};
      margin: 0.7rem 0;
    }
  }
`
