import express from 'express'
import teamMembers from './teamMembersMap'

export const redirectHelper = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { path } = req
  const pathLowerCase = path.toLowerCase()

  // Only redirect if it's an old route
  const shouldRedirect = checkForRedirect(pathLowerCase)

  if (shouldRedirect) {
    const redirectTo = handlePaths(pathLowerCase)
    res.redirect(301, redirectTo)
    return next()
  }

  // Proceed like nothing happened if it's a "new" route
  return next()
}

export const checkForRedirect = (path: string) => {
  const oldPaths = [
    '/cases',
    '/operations',
    '/team',
    '/teamet',
    '/ai',
    '/cases/tsab',
    '/cases/vimla',
    '/news',
    '/ms',
  ]
  if (
    oldPaths.includes(path) ||
    /(^\/team\/)/g.test(path) ||
    /(^\/teamet\/)/g.test(path) ||
    /(^\/career\/?)/g.test(path) ||
    /(^\/operations\/?)/g.test(path) ||
    /(^\/news\/?)/g.test(path)
  ) {
    return true
  }

  return false
}

export const handlePaths = (path: string) => {
  if (/(^\/team\/)/g.test(path)) {
    return getTeamMemberPath(path)
  }
  if (/(^\/teamet\/)/g.test(path)) {
    return path.replace('/teamet/', '/medarbetare/')
  }

  if (/(^\/career\/?)/g.test(path)) {
    return getCareerPath(path)
  }

  switch (path) {
    case '/team':
      return '/medarbetare'
    case '/teamet':
      return '/medarbetare'
    case '/cases':
      return '/case'
    case '/operations':
    case '/operations/sv':
      return '/erbjudanden'
    case '/ai':
      return '/erbjudanden'
    case '/cases/tsab':
      return '/case/tsab'
    case '/cases/vimla':
      return '/case/vimla'
    case '/news':
      return '/'
    case '/ms':
      return '/'
    default:
      return '/' // TODO: Add a 404 for pages not found
  }
}

export const getTeamMemberPath = (path: string) => {
  const memberName = path.replace('/team/', '')

  if (!memberName) {
    return path.replace('/team/', '/medarbetare')
  }

  const memberAbbreviated = teamMembers[memberName]
  const newTeamMemberPath = `/medarbetare/${memberAbbreviated}`

  return newTeamMemberPath
}

export const getCareerPath = (path: string) => {
  const jobOpening = path.replace('/career/', '')

  switch (jobOpening) {
    case 'senior-backend-developer':
    case 'senior-backend-developer-sv':
      return '/karriar/senior-backend-developer-stockholm'
    case 'senior-frontend-developer':
    case 'senior-frontend-developer-sv':
      return '/karriar/senior-frontend-developer-stockholm'
    default:
      return '/karriar'
  }
}
