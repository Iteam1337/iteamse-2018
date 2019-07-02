import express from 'express'

export const apolloUri = (host: string, req: express.Request) => {
  return host.includes('http')
    ? host
    : `${req.protocol}://${req.hostname}${host}`
}
