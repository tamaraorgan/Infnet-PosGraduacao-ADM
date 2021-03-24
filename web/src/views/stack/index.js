import { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import FormRegister from '../../components/FormRegister'
import ListRegister from '../../components/ListRegister'
import { getServiceAllStacksListById } from '../../services/stack.service'
import Loading from '../../components/Spinner'

import { Container, Title, Body } from './style'

function Stack() {
  const { id } = useParams()
  const history = useHistory()
  const [lists, setLists] = useState({})
  const [updateList, setUpdateList] = useState(false)
  const [loading, setLoading] = useState(false)
  console.log(lists.allocation)
  //const [hasError, setHasError] = useState(false)

  const getListById = useCallback(async () => {
    try {
      setLoading(true)
      const res = await getServiceAllStacksListById(id)
      setLists(res.data)
      setLoading(false)
    } catch (error) {
      history.push('?/error=404')
    }
  }, [id, history])

  useEffect(() => {
    getListById()
    setUpdateList(false)
  }, [getListById, updateList])

  document.title = 'STACK'
  return (
    <Container>
      <Title>{lists.stack}</Title>
      <Body>
        {loading ? (
          <Loading />
        ) : (
          <>
            <FormRegister id={id} update={setUpdateList} />
            <ListRegister register={lists.employees} update={setUpdateList} />
          </>
        )}
      </Body>
    </Container>
  )
}
export default Stack
