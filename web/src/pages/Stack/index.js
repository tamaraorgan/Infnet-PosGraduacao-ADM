import { useCallback, useEffect, useState } from 'react'
import { getAllStack } from '../../config/services/stack.service'
import { StackContainer, CardStack } from './style'

const Stack = () => {
  const [stacks, setStacks] = useState([])

  const getStack = useCallback(async () => {
    const result = await getAllStack()

    setStacks(result.data)
  }, [])

  useEffect(() => {
    getStack()
  }, [getStack])

  return (
    <StackContainer>
      {stacks.map((stack, i) => (
        <CardStack key={i}>
          <h3>{stack.stack}</h3>
          <img src={stack.image} alt="" />
          <a href={stack.id}>SABER MAIS</a>
        </CardStack>
      ))}
    </StackContainer>
  )
}

export default Stack
