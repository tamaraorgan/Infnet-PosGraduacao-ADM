import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global'
import Routes from './routes'
import theme from './styles/theme'
import store from './config/redux/store'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
