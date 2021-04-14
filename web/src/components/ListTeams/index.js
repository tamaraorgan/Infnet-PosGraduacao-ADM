import { MdModeEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

import { List, TableBody, TableTitle } from './style'

const ListTeams = ({ teams, update }) => {
  return (
    <List>
      {teams && teams.length ? (
        <>
          <TableTitle>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Lugar</th>
                <th>Estado</th>
                <th className="empty"></th>
              </tr>
            </thead>
          </TableTitle>
          <TableBody>
            {teams &&
              teams.map((team, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{team.name}</td>
                    <td>{team.email}</td>
                    <td>{team.phone}</td>
                    <td>{team.place}</td>
                    <td>{team.state}</td>
                    <td>
                      <button>
                        <MdModeEdit />
                      </button>
                      <button>
                        <IoMdTrash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </TableBody>
        </>
      ) : (
        <p>Não existe registros para essa stack.</p>
      )}
    </List>
  )
}

export default ListTeams
