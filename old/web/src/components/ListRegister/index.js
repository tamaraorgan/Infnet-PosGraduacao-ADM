import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { deleteServiceAllStacksList } from '../../services/stack.service'
import Modal from '../../components/Modal'
import InfoSweet from '../../plugins/infoSwal'

import { List, TableTitle, TableBody } from './style'

const ListRegister = ({ register, update }) => {
  const [modal, setModal] = useState({
    isShow: false,
    data: null
  })

  const handleDeleteInput = () => {
    if (modal.data.id) {
      deleteServiceAllStacksList(modal.data.id)
        .then(() => {
          
          update(true)
        })
        .catch(error => {
         
        })
    }
  }

  const toggleModal = (data = null) => {
    setModal({
      isShow: !modal.isShow,
      data
    })
  }
  return (
    <List>
      {register && register.length ? (
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
          <TableBody>
            {register &&
              register.map((item, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{item.employee}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.place}</td>
                    <td>{item.state}</td>
                    <td>
                      <button onClick={() => toggleModal(item)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </TableBody>
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
