import { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import { getAllTeamsByID } from '../../config/services/team.service'
import Loader from '../../components/Loader'

import { Container } from './style'
import FormTeam from '../../components/ListsFormTeams/FormTeam'
import ListTeam from '../../components/ListsFormTeams/ListTeam'

function Teams() {
  const { id } = useParams()
  const history = useHistory()
  const [listsTeams, setListsTeams] = useState({})
  const [updateList, setUpdateList] = useState(false)
  const [loading, setLoading] = useState(false)
  //const [hasError, setHasError] = useState(false)

  const getListById = useCallback(async () => {
    try {
      setLoading(true)
      const res = await getAllTeamsByID(id)
      setListsTeams(res.data)
      setLoading(false)
    } catch (error) {
      history.push('?/error/404')
    }
  }, [id, history])

  useEffect(() => {
    getListById()
    setUpdateList(false)
  }, [getListById, updateList])

  console.log(listsTeams);

  document.title = 'Teams'
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FormTeam id={id} update={setUpdateList} />
          <ListTeam teams={listsTeams} update={setUpdateList} />
        </>
      )}
    </Container>
  )
}
export default Teams
