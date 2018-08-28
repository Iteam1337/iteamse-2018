import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import compression from 'compression'
import express from 'express'
import proxy from 'http-proxy-middleware'
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

interface StaticContext {
  statusCode?: number
  url?: string
  action?: 'PUSH' | 'REPLACE'
  location?: object
}

const server = express()
const { RAZZLE_CMS_NODE_URL, RAZZLE_PUBLIC_DIR, RAZZLE_HOST } = process.env

server.use(compression())
server.use(
  '/cms',
  proxy({
    pathRewrite: (path: string) => path.replace('/cms', ''),
    target: RAZZLE_CMS_NODE_URL,
  })
)

server
  .disable('x-powered-by')
  .use(express.static(RAZZLE_PUBLIC_DIR!))
  .get(
    '/*',
    redirectHelper,
    async (req: express.Request, res: express.Response) => {
      try {
        const client = new ApolloClient({
          cache: new InMemoryCache(),
          link: createHttpLink({
            fetch,
            uri: RAZZLE_HOST,
          }),
          ssrMode: true,
        })

        const sheet = new ServerStyleSheet()
        const context: StaticContext = { }

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
        if (context.statusCode === 404) {
          res.status(404)
        }
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
    }
  )

export default server
