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
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormBody = styled.div`
  background: ${props => props.theme.colors.white};
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};

  h3 {
    margin-bottom: 1rem;
  }

  .input-area {
    display: flex;
    flex-direction: column;

    div {
      width: 15rem;
      border: none;
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
        height: 100%;
        background: none;
        border: none;
        padding: 0.5rem;
        ::placeholder {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
  button {
    border: none;
    background: ${props => props.theme.colors.primary};
    padding: 0.5rem 1.5rem;
    color: ${props => props.theme.colors.white};
    margin-top: 1rem;
  }
`
