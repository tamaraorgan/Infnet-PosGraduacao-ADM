import styled from 'styled-components'

import { RiCheckLine } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'

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
        <div className="buttons">
          <button type="submit">
            <RiCheckLine />
          </button>
          <button type="submit">
            <MdClose />
          </button>
        </div>
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
    display: flex;
    input {
      padding: 1rem 0rem 1rem 0.3rem;
      min-width: 10.5rem;
      flex: 1;
      background-color: transparent;
      border: 1px solid ${props => props.theme.colors.background};

      ::placeholder {
        font-family: 'Raleway', sans-serif;
        font-size: 0.9rem;
      }
    }

    .buttons {
      border: 1px solid ${props => props.theme.colors.background};
      width: 6rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      button {
        border: none;
        background: transparent;
        svg {
          font-size: 1.3rem;
          color: ${props => props.theme.colors.text};

          :hover {
            color: ${props => props.theme.colors.secundary};
          }
        }
      }
    }
  }
`
