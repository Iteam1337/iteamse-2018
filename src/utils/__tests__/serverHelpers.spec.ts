// import { NextFunction, Request, Response } from 'express'
import { checkForRedirect, handlePaths, redirectHelper } from '../serverHelpers'

describe('#redirectHelper', () => {
  describe('#handlePaths', () => {
    it('should return the path for /career', () => {
      const redirectsTo = handlePaths('/career/')
      expect(redirectsTo).toBe('/jobba-hos-oss')
    })

    it('should return the path for /cases', () => {
      const redirectsTo = handlePaths('/cases')
      expect(redirectsTo).toBe('/case')
    })

    it('should return the path for /team', () => {
      const redirectsTo = handlePaths('/team')
      expect(redirectsTo).toBe('/teamet')
    })

    it('should return the path for /ai', () => {
      const redirectsTo = handlePaths('/ai')
      expect(redirectsTo).toBe('/erbjudanden/ai')
    })

    it('should return the path for /ai', () => {
      const redirectsTo = handlePaths('/ai')
      expect(redirectsTo).toBe('/erbjudanden/ai')
    })

    it('should return the path for /operations', () => {
      const redirectsTo = handlePaths('/operations')
      expect(redirectsTo).toBe('/ops')
    })

    it('should return the path for the tsab case', () => {
      const redirectsTo = handlePaths('/cases/tsab')
      expect(redirectsTo).toBe('/case/tsab')
    })
    it('should return the path for the vimla case', () => {
      const redirectsTo = handlePaths('/cases/vimla')
      expect(redirectsTo).toBe('/case/vimla')
    })

    it('should return the path for /career/senior-backend-developer', () => {
      const redirectsTo = handlePaths('/career/senior-backend-developer')
      expect(redirectsTo).toBe(
        '/jobba-hos-oss/senior-backend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-backend-developer-sv', () => {
      const redirectsTo = handlePaths('/career/senior-backend-developer-sv')
      expect(redirectsTo).toBe(
        '/jobba-hos-oss/senior-backend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-frontend-developer', () => {
      const redirectsTo = handlePaths('/career/senior-frontend-developer')
      expect(redirectsTo).toBe(
        '/jobba-hos-oss/senior-frontend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-frontend-developer-sv', () => {
      const redirectsTo = handlePaths('/career/senior-frontend-developer-sv')
      expect(redirectsTo).toBe(
        '/jobba-hos-oss/senior-frontend-developer-stockholm'
      )
    })

    it('should return the path for an individual team member', () => {
      const redirectsTo = handlePaths('/team/andre')
      expect(redirectsTo).toBe('/teamet/aeo')
    })

    it('should return / if the path cannot be found', () => {
      // TODO: Implement a 404 page
      const redirectsTo = handlePaths('/sesame-street')
      expect(redirectsTo).toBe('/')
    })
  })

  describe('#checkForRedirect', () => {
    it('should return true for /cases', () => {
      const shouldRedirect = checkForRedirect('/cases')
      expect(shouldRedirect).toBe(true)
    })

    it('should return false for /case', () => {
      const shouldRedirect = checkForRedirect('/case')
      expect(shouldRedirect).toBe(false)
    })
  })

  xdescribe('#redirectHelper', () => {
    it('should call checkForRedirect', () => {
      const req = {
        ...Request,
        path: '/cases',
      }
      const res: Response = jest.fn({
        redirect: jest.fn(),
      })
      const next: NextFunction = jest.fn()

      redirectHelper(req, res, next)
      expect(handlePaths).toHaveBeenCalled()
    })

    it('sould call res.redirect if shouldRedirect returns true', () => {
      const req = {
        path: '/cases',
      }

      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/case')
      expect(next).toHaveBeenCalled()
    })

    it('should not redirect if shouldRedirect returns false', () => {
      const req = {
        path: '/teamet',
      }

      redirectHelper(req, res, next)
      expect(res.redirect).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()
    })
  })
})
