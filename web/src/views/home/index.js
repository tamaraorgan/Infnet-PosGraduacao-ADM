import { useState, useEffect, useCallback } from 'react'
import { getServiceAllStacks } from '../../services/stack.service'
import { Link } from 'react-router-dom'
import Spinners from '../../components/Spinner'

import { Container, Body, Title, StackSection } from './style'



function Home() {
  const [stacks, setStacks] = useState([])
  const [loagind, setLoagind] = useState(false)

  const getStacks = useCallback(async () => {
    try {
      const res = await getServiceAllStacks()
      setStacks(res.data)
    } catch (error) {
   
    }
  }, [])

  useEffect(() => {
    getStacks()
  }, [getStacks])

  document.title = 'INÍCIO'
  return (
    <Container>
      <Title>INÍCIO</Title>
      <Body>
        {loagind ? <Spinners/> : (
          <>
          {stacks.map((stack, i) => (
            <StackSection key={i}>
              <h3>{stack.stack}</h3>
              <img src={stack.image} alt="" />
              <Link to={`/${stack.stack}/${stack.id}`}>ENTRAR</Link>
            </StackSection>
          ))}
          </>
        )}
        
      </Body>
    </Container>
  )
}
export default Home
