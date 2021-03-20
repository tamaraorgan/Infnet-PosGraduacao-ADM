import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinners from '../../components/Spinner'

import FormRegister from '../../components/FormRegister'
import ListRegister from '../../components/ListRegister'
import { getServiceAllStacksListById } from '../../services/stack.service'

import { Container, Title, Body } from './style'


function Stack() {
  const { id, stack } = useParams()
  const [lists, setLists] = useState([])
  const [updateList, setUpdateList] = useState(false)
  const [loagind, setLoagind] = useState(false)

  //const [hasError, setHasError] = useState(false)

  console.log(lists)

  const getListById = useCallback(async () => {
    try {
      const res = await getServiceAllStacksListById(id)
      setLists(res.data)
    } catch (error) {
      //setHasError(true)
    }
  }, [id])

  useEffect(() => {
    getListById()
    setUpdateList(false)
  }, [getListById, updateList])

  document.title = 'STACK'
  return (
    <Container>
      <Title>{stack}</Title>
      <Body>
        {loagind ? (
          <Spinners />
        ) : (
          <>
            <FormRegister id={id} update={setUpdateList} />
            <ListRegister register={lists} update={setUpdateList} />
          </>
        )}
      </Body>
    </Container>
  )
}
export default Stack
