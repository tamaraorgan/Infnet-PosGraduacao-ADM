import Menu from './Menu'
import {
  LayoutContainer,
  LayoutContent,
  LayoutSession,
  HeaderSession,
  BodySession
} from './style'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Menu />
      </LayoutContent>

      <LayoutSession>
        <HeaderSession>{}</HeaderSession>
        <BodySession>{children}</BodySession>
      </LayoutSession>
    </LayoutContainer>
  )
}

export default Layout
