import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { deleteServiceAllStacksList } from '../../services/stack.service'
import Modal from '../Modal'

import { List, TableTitle, TableBody } from './style'

const ListRegister = ({ register, update }) => {
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState([
    {
      type: 'Sucesso',
      message: 'Cadastro realizado com sucesso!'
    },
    {
      type: 'error',
      message: 'Ocorreu um erro, tente novamente!'
    }
  ])

  const handleDeleteInput = async id => {
    try {
      await deleteServiceAllStacksList(id)
      if (setIsError) {
        alert("Deletado com sucesso")
      }

      update(true)
    } catch (error) {}
  }

  return (
    <List>
      {register && register.length ? (
        <>
          <TableTitle>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Lugar</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </TableTitle>
          <TableBody>
            {register &&
              register.map((item, i) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.place}</td>
                  <td>{item.state}</td>
                  <td>
                    <button onClick={() => handleDeleteInput(item.id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </TableBody>
        </>
      ) : (
        <p>Não existe registro para essa stack.</p>
      )}
    </List>
  )
}
export default ListRegister
