import { IoMdTrash } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'


import { FormListContainer } from './style'

const FormList = ({ teams, toggleEdit, toggleModal }) => {
  return (
    <FormListContainer>
      <input type="text" name="" id="" value={teams.name} readOnly />
      <input type="text" name="" id="" value={teams.email} readOnly />
      <input type="text" name="" id="" value={teams.phone} readOnly />
      <input type="text" name="" id="" value={teams.state} readOnly />
      <input type="text" name="" id="" value={teams.progress} readOnly />
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
