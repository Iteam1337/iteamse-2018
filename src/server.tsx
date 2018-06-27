import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import compression from 'compression'
import express from 'express'
import fetch from 'node-fetch'
import React from 'react'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import serialize from 'serialize-javascript'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import App from './App'
import Html from './Html'
import { theme } from './theme'
import { redirectHelper } from './utils/serverHelpers'

const server = express()

server.use(compression())

server.get(
  '/*',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    redirectHelper(req, res, next)
)

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req: express.Request, res: express.Response) => {
    try {
      const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: createHttpLink({
          fetch,
          uri: process.env.RAZZLE_CMS_NODE_URL,
        }),
        ssrMode: true,
      })

      const sheet = new ServerStyleSheet()
      const context = {}

      const markup = sheet.collectStyles(
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </ThemeProvider>
        </ApolloProvider>
      )

      const content = await renderToStringWithData(markup)

      const apolloState = client.extract()
      const styleTags = sheet.getStyleElement()

      const html = (
        <Html
          apolloState={serialize(apolloState, { isJSON: true })}
          content={content}
          styleTags={styleTags}
        />
      )

      res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
    } catch (error) {
      console.error(error)

      res.status(500)
      res.end(
        `An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${
          error.stack
        }`
      )
    }
  })

export default server
