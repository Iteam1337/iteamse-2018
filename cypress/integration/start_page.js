describe('Start', () => {
  beforeEach(() => {
    cy.viewport(480, 900)
    cy.visit('/')
  })

  it('should not display mobile menu on desktop', () => {
    cy.viewport(1200, 900)
    cy.visit('/')

    cy.get('[data-test=btn-mobile-menu]').should('not.be.visible')
  })

  it('should handle mobile menu', () => {
    // Open
    cy
      .get('[data-test=btn-mobile-menu]')
      .as('btn')
      .should('be.visible')
      .get('[data-test=mobile-menu]')
      .should('not.be.visible')
      .get('@btn')
      .click()
      .get('[data-test=mobile-menu]')
      .should('be.visible')
      .and('contain', 'Om oss')

      // Close
      .get('@btn')
      .click()
      .get('[data-test=mobile-menu]')
      .should('not.be.visible')
  })
})
