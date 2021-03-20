import Menu from '../Menu'
import { Container, Content, Section, Body } from './style'

function Layout({ children }) {
  return (
    <Container>
      <Content>
        <Menu />
      </Content>
      <Section>
        <Body>{children}</Body>
      </Section>
    </Container>
  )
}
export default Layout
