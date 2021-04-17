import { useState } from 'react'
import { IoMdTrash } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'
import { deleteAllTeams } from '../../../config/services/team.service'
import Modal from '../../Modal'
import FormUpdate from '../../ListsFormTeams/FormUpdate'

import { List, TableTitle, TableBody } from './style'

const ListRegister = ({ teams, update }) => {
  const [isEditInput, setIsEditInput] = useState({
    isEdit: false,
    data: null
  })
  const [modal, setModal] = useState({
    isShow: false,
    data: null
  })

  const handleDeleteInput = () => {
    if (modal.data.id) {
      deleteAllTeams(modal.data.id)
        .then(() => {
          update(true)
        })
        .catch(error => {
          alert('Aconteceu um erro.')
        })
    }
  }

  const toggleModal = (data = null) => {
    setModal({
      isShow: !modal.isShow,
      data
    })
  }
  const toggleEditTeam = (data = null) => {
    setIsEditInput({
      isEdit: !isEditInput.isEdit,
      data
    })
  }

  console.log(isEditInput)
  return (
    <List>
      {teams && teams.length ? (
        <>
          <TableTitle>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Lugar</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
          </TableTitle>
          {!isEditInput.isEdit ? (
            <TableBody>
              {teams &&
                teams.map((item, i) => (
                  <tbody key={i}>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.place}</td>
                      <td>{item.state}</td>
                      <td>
                        <button onClick={() => toggleEditTeam(item)}>
                          <MdModeEdit />
                        </button>
                        <button onClick={() => toggleModal(item)}>
                          <IoMdTrash />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </TableBody>
          ) : (
            <FormUpdate
              teams={isEditInput}
              isEdit={isEditInput.isEdit}
              toggleEditTeam={toggleEditTeam}
            />
          )}

          <Modal
            modal={modal}
            isShow={modal.isShow}
            toggleModal={toggleModal}
            handleDeleteInput={handleDeleteInput}
          />
        </>
      ) : (
        <p>Não existe registro para essa stack.</p>
      )}
    </List>
  )
}
export default ListRegister
