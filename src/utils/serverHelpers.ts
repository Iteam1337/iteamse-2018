import express from 'express'

export const redirectHelper = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { path } = req
  if (path === '/career') {
    res.redirect(301, '/jobba-hos-oss')
  }
  return next()
}

export const handlePaths = (path: string) => {
  switch (path) {
    case '/career':
      return '/jobba-hos-oss'
    case '/cases':
      return '/case'
    case '/operations':
      return '/ops'
    case '/team':
      return '/teamet'
    case '/ai':
      return '/erbjudanden/ai'
    case '/cases/tsab':
      return '/case/tsab'
    case '/cases/vimla':
      return '/case/vimla'
    case '/career/senior-backend-developer':
    case '/career/senior-backend-developer-sv':
      return '/jobba-hos-oss/senior-backend-developer-stockholm'
    case '/career/senior-frontend-developer':
    case '/career/senior-frontend-developer-sv':
      return '/jobba-hos-oss/senior-frontend-developer-stockholm'
    case /(^\/team\/)/g.test(path):
      return handleTeamMembers(path)
    default:
      return null
  }
}

export const handleTeamMembers = (path: string) => {
  // TODO: split the path after /team/
  // TODO: create an Object/Map that holds old and new slugs (e.g. andre => aeo)
  // TODO: return a new path, e.g. /teamet/aeo
  return
}

// TODO: figure out how to use regexp properly in TS
// TODO: create a handleCareerOpenings helper
// TODO: implement handlePaths in the redirectHelper
