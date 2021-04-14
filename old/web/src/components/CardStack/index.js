import { Link } from 'react-router-dom'
import { ContainerStack } from './style'

function index(props) {
  const { stack, id, image } = props.stack
  return (
    <ContainerStack>
      <h3>{stack}</h3>
      <img src={image} alt="" />
      <Link to={`/stacks/${id}`} >ENTRAR</Link>
    </ContainerStack>
  )
}

export default index
