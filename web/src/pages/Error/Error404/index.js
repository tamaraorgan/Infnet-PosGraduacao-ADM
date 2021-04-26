import { ErrorContainer, Body } from './style'

import ErrorImg from '../../../assets/image/svg-mulher-big.svg'

function Error404() {
  document.title = 'ERROR'
  return (
    <ErrorContainer>
      <img src={ErrorImg} alt="Error"/>
      <Body>
        <h1>404</h1>
        <p>PÁGINA NÃO ENCONTRADA!</p>
      </Body>
    </ErrorContainer>
  )
}
export default Error404