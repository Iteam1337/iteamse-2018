import express from 'express'
import teamMembers from './teamMembersMap'

export const redirectHelper = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { path } = req

  // Only redirect if it's an old route
  const shouldRedirect = checkForRedirect(path)

  if (shouldRedirect) {
    const redirectTo = handlePaths(path)
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
    '/ai',
    '/cases/tsab',
    '/cases/vimla',
  ]
  if (
    oldPaths.includes(path) ||
    /(^\/team\/)/g.test(path) ||
    /(^\/career\/?)/g.test(path)
  ) {
    return true
  }

  return false
}

export const handlePaths = (path: string) => {
  if (/(^\/team\/)/g.test(path)) {
    return getTeamMemberPath(path)
  }

  if (/(^\/career\/?)/g.test(path)) {
    return getCareerPath(path)
  }

  switch (path) {
    case '/team':
      return '/teamet'
    case '/cases':
      return '/case'
    case '/operations':
      return '/' // TODO: Figure out where should it link to
    case '/ai':
      return '/erbjudanden/ai'
    case '/cases/tsab':
      return '/case/tsab'
    case '/cases/vimla':
      return '/case/vimla'
    default:
      return '/' // TODO: Add a 404 for pages not found
  }
}

export const getTeamMemberPath = (path: string) => {
  const memberName = path.replace('/team/', '')

  const memberAbbreviated = teamMembers[memberName]
  const newTeamMemberPath = `/teamet/${memberAbbreviated}`

  return newTeamMemberPath
}

export const getCareerPath = (path: string) => {
  const jobOpening = path.replace('/career/', '')

  switch (jobOpening) {
    case 'senior-backend-developer':
    case 'senior-backend-developer-sv':
      return '/jobba-hos-oss/senior-backend-developer-stockholm'
    case 'senior-frontend-developer':
    case 'senior-frontend-developer-sv':
      return '/jobba-hos-oss/senior-frontend-developer-stockholm'
    default:
      return '/jobba-hos-oss'
  }
}
