import { IoMdTrash } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'


import { FormListContainer } from './style'

const FormList = ({ teams, toggleEdit, toggleModal }) => {
  return (
    <FormListContainer>
      <input type="text" name="name" id="name" value={teams.name} readOnly />
      <input type="email" name="email" id="email" value={teams.email} readOnly />
      <input type="text" name="phone" id="phone" value={teams.phone} readOnly />
      <input type="text" name="state" id="state" value={teams.state} readOnly />
      <input type="text" name="progress" id="progress" value={`${teams.progress}%`} readOnly />
      <div className="buttons">
        <button type="button" onClick={() => toggleEdit(teams)}>
          <MdModeEdit />
        </button>
        <button onClick={() => toggleModal(teams)}>
          <IoMdTrash />
        </button>
      </div>
    </FormListContainer>
  )
}

export default FormList
