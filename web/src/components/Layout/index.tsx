import Menu from '../Menu'
import { Container, Content, Section, Body } from './style'

interface LayoutProps {
  children: any
}

function Layout({ children }: LayoutProps) {
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
