import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import Global from './styles/global'

import Router from './router'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
