import Body from './Body'
import Header from './Header'
import Menu from './Menu'

import {
  LayoutContainer,
  LayoutContent,
  LayoutSession
} from './style'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Menu />
      </LayoutContent>

      <LayoutSession>
        <Header />
        <Body>{children}</Body>
      </LayoutSession>
    </LayoutContainer>
  )
}

export default Layout
