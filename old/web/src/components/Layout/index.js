import React from 'react'
import Menu from '../Menu'
import { Container, BodyLayout, SectionLayout } from './style'

function Layout({ children }) {

  return (
    <Container>
      <Menu />
      <BodyLayout>
        <SectionLayout>{children}</SectionLayout>
      </BodyLayout>
    </Container>
  )
}
export default Layout
