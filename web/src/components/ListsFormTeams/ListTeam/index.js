import { useState } from 'react'
import { deleteAllTeams } from '../../../config/services/team.service'
import Modal from '../../Modal'

import { List, ListTitle, ListBody, ListItemForm } from './style'
import FormUpdate from '../FormUpdate'
import FormList from '../FormList'

const ListRegister = ({ teams, update }) => {
  const [isEditInput, setIsEditInput] = useState(false)
  const [idItem, setIdItem] = useState('')
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
  // const toggleEditTeam = (data = null) => {
  //   setIsEditInput({
  //     isEdit: !isEditInput.isEdit,
  //     data
  //   })
  // }

  // const toggleEditTeam = index => {
  //   teams.map((item, i) => {
  //     if (i === index) {
  //       console.log(i, 'i')
  //       console.log(index, 'index')
  //
  //     }
  //     return item
  //   })
  // }

  const toggleEdit = item => {
    setIdItem(item.id)
  }

  console.log(isEditInput)
  return (
    <List>
      {teams && teams.length ? (
        <>
          <ListTitle>
            <p>Nome</p>
            <p>E-mail</p>
            <p>Telefone</p>
            <p>Estado</p>
            <p>Progresso</p>
            <div></div>
          </ListTitle>

          <ListBody>
            {teams &&
              teams.map((item, i) => (
                <ListItemForm key={i}>
                  {item.id === idItem ? (
                    <FormUpdate
                      teams={item}
                      setIdItem={setIdItem}
                      update={update}
                      id={item.id}
                    />
                  ) : (
                    <FormList
                      teams={item}
                      toggleEdit={toggleEdit}
                      toggleModal={toggleModal}
                      update={update}
                    />
                  )}
                </ListItemForm>
              ))}
          </ListBody>
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
