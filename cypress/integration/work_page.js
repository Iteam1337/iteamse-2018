describe('Work', () => {
  beforeEach(() => {
    cy.viewport(1200, 1000)
    cy.visit('/jobba-hos-oss')
  })

  it('should be able to filter open positions', () => {
    // Mouse click
    cy
      .get('[data-test=filter-Göteborg]')
      .as('gbg')
      .click()
      .get('[data-test=block-location]')
      .should('not.contain', 'Stockholm')

    cy
      .get('[data-test=filter-Stockholm]')
      .as('sthlm')
      .click()
      .get('[data-test=block-location]')
      .should('not.contain', 'Göteborg')

    cy
      .get('[data-test=filter-]')
      .as('all')
      .click()
      .get('[data-test=block-location]')
      .should('contain', 'Stockholm')

    // Enter press when tabbing
    cy
      .get('@gbg')
      .trigger('keyup', {
        keyCode: 13,
      })
      .get('[data-test=block-location]')
      .should('not.contain', 'Stockholm')

    cy
      .get('@sthlm')
      .trigger('keyup', {
        keyCode: 13,
      })
      .get('[data-test=block-location]')
      .should('not.contain', 'Göteborg')

    // Space press when tabbing
    cy
      .get('@gbg')
      .trigger('keyup', {
        keyCode: 32,
      })
      .get('[data-test=block-location]')
      .should('not.contain', 'Stockholm')

    cy
      .get('@sthlm')
      .trigger('keyup', {
        keyCode: 32,
      })
      .get('[data-test=block-location]')
      .should('not.contain', 'Göteborg')

    // Does not handle other keys
    cy
      .get('@all')
      .click()
      .get('@gbg')
      .trigger('keyup', {
        keyCode: 9,
      })
      .get('[data-test=block-location]')
      .should('contain', 'Stockholm')
  })
})
