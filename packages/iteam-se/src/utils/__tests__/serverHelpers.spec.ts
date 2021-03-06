import { checkForRedirect, handlePaths, redirectHelper } from '../serverHelpers'

describe('#redirectHelper', () => {
  describe('#handlePaths', () => {
    it('should return the path for /career', () => {
      const redirectsTo = handlePaths('/career/')
      expect(redirectsTo).toEqual('/karriar')
    })

    it('should return the path for /cases', () => {
      const redirectsTo = handlePaths('/cases')
      expect(redirectsTo).toEqual('/case')
    })

    it('should return the path for /team', () => {
      const redirectsTo = handlePaths('/team')
      expect(redirectsTo).toEqual('/medarbetare')
    })

    it('should return the path for /team/', () => {
      const redirectsTo = handlePaths('/team/')
      expect(redirectsTo).toEqual('/medarbetare')
    })

    it('should return the path for /teamet', () => {
      const redirectsTo = handlePaths('/teamet')
      expect(redirectsTo).toEqual('/medarbetare')
    })

    it('should return the path for /teamet for individual team member', () => {
      const redirectsTo = handlePaths('/teamet/sll')
      expect(redirectsTo).toEqual('/medarbetare/sll')
    })

    it('should return the path for /ai', () => {
      const redirectsTo = handlePaths('/ai')
      expect(redirectsTo).toEqual('/erbjudanden')
    })

    it('should return offers for /operations', () => {
      const redirectsTo = handlePaths('/operations')
      expect(redirectsTo).toEqual('/erbjudanden')
    })

    it('should return offers for /operations/sv', () => {
      const redirectsTo = handlePaths('/operations/sv')
      expect(redirectsTo).toEqual('/erbjudanden')
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
      expect(redirectsTo).toEqual('/karriar/senior-backend-developer-stockholm')
    })

    it('should return the path for /career/senior-backend-developer-sv', () => {
      const redirectsTo = handlePaths('/career/senior-backend-developer-sv')
      expect(redirectsTo).toEqual('/karriar/senior-backend-developer-stockholm')
    })

    it('should return the path for /career/senior-frontend-developer', () => {
      const redirectsTo = handlePaths('/career/senior-frontend-developer')
      expect(redirectsTo).toEqual(
        '/karriar/senior-frontend-developer-stockholm'
      )
    })

    it('should return the path for /career/senior-frontend-developer-sv', () => {
      const redirectsTo = handlePaths('/career/senior-frontend-developer-sv')
      expect(redirectsTo).toEqual(
        '/karriar/senior-frontend-developer-stockholm'
      )
    })

    it('should return the path for an individual team member', () => {
      const redirectsTo = handlePaths('/team/andre')
      expect(redirectsTo).toEqual('/medarbetare/aeo')
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

    it('should redirect from /career to /karriar', () => {
      req = {
        path: '/career',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/karriar')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /CAREER to /karriar', () => {
      req = {
        path: '/CAREER',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/karriar')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /CAREER/SomeSlug to /karriar', () => {
      req = {
        path: '/CAREER/SomeSlug',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/karriar')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /Career/slug?foo=bar to /karriar', () => {
      req = {
        path: '/Career/slug?foo=bar',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/karriar')
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
        path: '/medarbetare',
      }

      redirectHelper(req, res, next)
      expect(res.redirect).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()
    })

    it('should not redirect from /medarbetare/aeo', () => {
      req = {
        path: '/medarbetare/aeo',
      }

      redirectHelper(req, res, next)
      expect(res.redirect).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /team to /medarbetare', () => {
      req = {
        path: '/team',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/medarbetare')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /team/ to /medarbetare', () => {
      req = {
        path: '/team/',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/medarbetare')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /team/andre to /medarbetare/aeo', () => {
      req = {
        path: '/team/andre',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/medarbetare/aeo')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /teamet to /medarbetare', () => {
      req = {
        path: '/teamet',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/medarbetare')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /teamet/sll to /medarbetare/sll', () => {
      req = {
        path: '/teamet/sll',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/medarbetare/sll')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /operations to /erbjudanden', () => {
      req = {
        path: '/operations',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/erbjudanden')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /operations/sv to /erbjudanden', () => {
      req = {
        path: '/operations/sv',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/erbjudanden')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /ai to /erbjudanden', () => {
      req = {
        path: '/ai',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/erbjudanden')
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

    it('should redirect from /career/senior-backend-developer to /karriar/senior-backend-developer-stockholm', () => {
      req = {
        path: '/career/senior-backend-developer',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(
        301,
        '/karriar/senior-backend-developer-stockholm'
      )
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /career/senior-frontend-developer to /karriar/senior-frontend-developer-stockholm', () => {
      req = {
        path: '/career/senior-frontend-developer',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(
        301,
        '/karriar/senior-frontend-developer-stockholm'
      )
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /news to /', () => {
      req = {
        path: '/news',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /news/slug to /', () => {
      req = {
        path: '/news/slug',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/')
      expect(next).toHaveBeenCalled()
    })

    it('should redirect from /ms to /', () => {
      req = {
        path: '/ms',
      }
      redirectHelper(req, res, next)
      expect(res.redirect).toHaveBeenCalledWith(301, '/')
      expect(next).toHaveBeenCalled()
    })
  })
})
