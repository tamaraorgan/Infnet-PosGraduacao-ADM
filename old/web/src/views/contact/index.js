import Header from '../../components/Header'
import { Container, Body } from './style'

function Contact() {
  document.title = 'CONTATO'
  return (
    <Container>
      <Header title="CONTATO" />
      <Body>
        <h1>CONTATO</h1>
      </Body>
    </Container>
  )
}
export default Contact
