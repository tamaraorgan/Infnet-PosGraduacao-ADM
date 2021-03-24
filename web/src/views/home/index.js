import { useState, useEffect, useCallback } from 'react'
import { getServiceAllStacks } from '../../services/stack.service'
import CardStack from '../../components/CardStack'

import { Container, Body, Title, StackSection } from './style'

function Home() {
  const [stacks, setStacks] = useState([])
  const [hasError, setHasError] = useState(false)

  const getStacks = useCallback(async () => {
    try {
      const res = await getServiceAllStacks()
      setStacks(res.data)
    } catch (error) {
      setHasError(true)
    }
  }, [])

  useEffect(() => {
    getStacks()
  }, [getStacks])

  const MapStacks = stacks =>
    stacks.map((stack, i) => <CardStack key={i} stack={{ ...stack }} />)

  document.title = 'INÍCIO'
  return (
    <Container>
      <Title>INÍCIO</Title>
      <Body>
        {hasError ? (
          <div>Aconteceu um erro, volte mais tarde...</div>
        ) : (
          <StackSection>{MapStacks(stacks)}</StackSection>
        )}
      </Body>
    </Container>
  )
}
export default Home
