import App from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './ApolloSetup'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

hydrate(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
