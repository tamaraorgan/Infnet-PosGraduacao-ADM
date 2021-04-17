import styled from 'styled-components'

const FormUpdate = ({ teams, isEdit, toggleEditTeam }) => {
  return (
    <FormEditContainer isEdit={isEdit}>
      <input type="text" name="name" id="" placeholder={teams?.data?.name} />
      <input type="email" name="email" id="" placeholder={teams?.data?.email} />
      <input type="text" name="phone" id="" placeholder={teams?.data?.phone} />
      <input type="text" name="place" id="" placeholder={teams?.data?.place} />
      <input type="text" name="state" id="" placeholder={teams?.data?.state} />
      <button>ok</button>
    </FormEditContainer>
  )
}

export default FormUpdate

export const FormEditContainer = styled.form`
  display: ${props => (props.isEdit ? 'flex' : 'none')};
  width: 99.7%;
  border: 1px solid red;

  input {
    height: 2.5rem;
    flex: 1;
    padding-left: 0.3rem;

    ::placeholder {
      font-family: 'Raleway', sans-serif;
    }
  }

  button {
    width: 6rem;
  }
`
