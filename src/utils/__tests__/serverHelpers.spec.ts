import { checkForRedirect, handlePaths, redirectHelper } from '../serverHelpers'

describe('#redirectHelper', () => {
  describe('#handlePaths', () => {
    it('should return the path for /career', () => {
      const redirectsTo = handlePaths('/career/')
      expect(redirectsTo).toEqual('/jobba-hos-oss')
    })

    it('should return the path for /cases', () => {
      const redirectsTo = handlePaths('/cases')
      expect(redirectsTo).toEqual('/case')
    })

    it('should return the path for /team', () => {
      const redirectsTo = handlePaths('/team')
      expect(redirectsTo).toEqual('/teamet')
    })

    it('should return the path for /ai', () => {
      const redirectsTo = handlePaths('/ai')
      expect(redirectsTo).toEqual('/erbjudanden/ai')
    })

    it('should return the path for /operations', () => {
      const redirectsTo = handlePaths('/operations')
      expect(redirectsTo).toEqual('/ops')
    })

    it('should return the path for the tsab case', () => {
      const redirectsTo = handlePaths('/cases/tsab')
      expect(redirectsTo).toEqual('/case/tsab')
    })
    it('should return the path for the vimla case', () => {
      const redirectsTo = handlePaths('/cases/vimla')
      expect(redirectsTo).toEqual('/case/vimla')
    })

    it('should return the path for /career/senior-backend-developer', () => {
      const redirectsTo = handlePaths('/career/senior-backend-developer')
      expect(redirectsTo).toEqual(
        '/jobba-hos-oss/senior-backend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-backend-developer-sv', () => {
      const redirectsTo = handlePaths('/career/senior-backend-developer-sv')
      expect(redirectsTo).toEqual(
        '/jobba-hos-oss/senior-backend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-frontend-developer', () => {
      const redirectsTo = handlePaths('/career/senior-frontend-developer')
      expect(redirectsTo).toEqual(
        '/jobba-hos-oss/senior-frontend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-frontend-developer-sv', () => {
      const redirectsTo = handlePaths('/career/senior-frontend-developer-sv')
      expect(redirectsTo).toEqual(
        '/jobba-hos-oss/senior-frontend-developer-stockholm'
      )
    })

    it('should return the path for an individual team member', () => {
      const redirectsTo = handlePaths('/team/andre')
      expect(redirectsTo).toEqual('/teamet/aeo')
    })

    it('should return / if the path cannot be found', () => {
      // TODO: Implement a 404 page
      const redirectsTo = handlePaths('/sesame-street')
      expect(redirectsTo).toEqual('/')
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

  describe('#redirectHelper', () => {
    let req
    let res
    let next

    beforeEach(() => {
      req = {
        path: '/cases',
      }

      res = {
        redirect: jest.fn(),
      }

      next = jest.fn()
    })

    it('sould call res.redirect if shouldRedirect returns true', () => {
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/case')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /career to /jobba-hos-oss', () => {
      req = {
        path: '/career',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/jobba-hos-oss')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /cases to /case', () => {
      req = {
        path: '/cases',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/case')
      expect(next).toHaveBeenCalled()
    })

    it('should not redirect if shouldRedirect returns false', () => {
      req = {
        path: '/teamet',
      }

      redirectHelper(req, res, next)
      expect(res.redirect).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()
    })

    it('should not redirect from /teamet/aeo', () => {
      req = {
        path: '/teamet/aeo',
      }

      redirectHelper(req, res, next)
      expect(res.redirect).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /team to /teamet', () => {
      req = {
        path: '/team',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/teamet')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /team/andre to /teamet/aeo', () => {
      req = {
        path: '/team/andre',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/teamet/aeo')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /operations to /ops', () => {
      req = {
        path: '/operations',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/ops')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /ai to /erbjudanden/ai', () => {
      req = {
        path: '/ai',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/erbjudanden/ai')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /cases/tsab to /case/tsab', () => {
      req = {
        path: '/cases/tsab',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/case/tsab')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /cases/vimla to /case/vimla', () => {
      req = {
        path: '/cases/vimla',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/case/vimla')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /career/senior-backend-developer to /jobba-hos-oss/senior-backend-developer-stockholm', () => {
      req = {
        path: '/career/senior-backend-developer',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(
        301,
        '/jobba-hos-oss/senior-backend-developer-stockholm'
      )
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /career/senior-frontend-developer to /jobba-hos-oss/senior-frontend-developer-stockholm', () => {
      req = {
        path: '/career/senior-frontend-developer',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(
        301,
        '/jobba-hos-oss/senior-frontend-developer-stockholm'
      )
      expect(next).toHaveBeenCalled()
    })
  })
})
