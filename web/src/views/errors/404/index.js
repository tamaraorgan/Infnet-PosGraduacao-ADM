import { Container, Body } from './style'

import ErrorImg from '../../../assets/image/Error.svg'

function Error404() {
  document.title = 'ERROR'
  return (
    <Container>
      <img src={ErrorImg} alt="Error"/>
      <Body>
        <h1>404</h1>
        <p>PÁGINA NÃO ENCONTRADA!</p>
      </Body>
    </Container>
  )
}
export default Error404
