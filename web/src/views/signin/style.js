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
export const SignInBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormBody = styled.div`
  background: ${props => props.theme.colors.white};
  width: 45%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.colors.text};
  padding: 1rem;

  img {
    height: 100%;
  }
`
export const SectionSignIn = styled.div`
  max-width: 70%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .input-area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      width: 80%;
      background: ${props => props.theme.colors.background};
      padding-left: 0.5rem;
      margin: 0.5rem;
      display: flex;
      align-items: center;

      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 0.8rem;
        margin-right: 0.3rem;
      }
      input {
        width: 100%;
        height: 100%;
        background: none;
        border: 2px solid transparent;
        padding: 0.5rem;
        outline: none;
        ::placeholder {
          color: ${props => props.theme.colors.primary};
        }
        :focus {
          border: 2px solid ${props => props.theme.colors.red};
        }
      }
    }
  }
  button {
    border: none;
    background: ${props => props.theme.colors.primary};
    padding: 0.5rem 2.5rem;
    color: ${props => props.theme.colors.white};
    margin: 0.5rem 0;
  }
  p {
    font-size: 0.8rem;
    margin: 0;

    a {
      color: ${props => props.theme.colors.red};
    }
  }
`
