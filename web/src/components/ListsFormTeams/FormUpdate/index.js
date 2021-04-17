import styled from 'styled-components'

const FormUpdate = ({ teams, isEdit, toggleEditTeam, index }) => {
  console.log(teams, 'updateList')
  return (
    <FormEditContainer isEdit={isEdit} key={index}>
      <form>
        <input type="text" name="name" id="" placeholder={teams?.name} />
        <input type="email" name="email" id="" placeholder={teams?.email} />
        <input type="text" name="phone" id="" placeholder={teams?.phone} />
        <input type="text" name="place" id="" placeholder={teams?.place} />
        <input type="text" name="state" id="" placeholder={teams?.state} />
        <button type="submit">ok</button>
      </form>
    </FormEditContainer>
  )
}

export default FormUpdate

export const FormEditContainer = styled.div`
  display: ${props => (props.isEdit ? 'flex' : 'none')};
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  form {
    input {
      height: 2.5rem;
      min-width: 10.5rem;
      flex: 1;
      padding-left: 0.3rem;
      background-color: transparent;
      border: 1px solid ${props => props.theme.colors.background};

      ::placeholder {
        font-family: 'Raleway', sans-serif;
      }
    }

    button {
      min-width: 6rem;
      border: none;
    }
  }
`
