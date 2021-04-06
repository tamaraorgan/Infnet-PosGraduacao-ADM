import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from './store'
import theme from './styles/theme'
import Global from './styles/global'

import Router from './router/router'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Global />
          <Router />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
