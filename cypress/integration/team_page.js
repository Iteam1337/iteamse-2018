describe('Team', () => {
  beforeEach(() => {
    cy.viewport(1200, 1000)
    cy.visit('/teamet')
  })

  it('should be able to filter open positions', () => {
    // Mouse click
    cy
      .get('[data-test=filter-Göteborg]')
      .as('gbg')
      .click()
      .get('[data-test=team-member-location]')
      .as('teamMemberLocation')
      .should('not.contain', 'Stockholm')
      .should('contain', 'Göteborg')

    cy
      .get('[data-test=filter-Stockholm]')
      .as('sthlm')
      .click()
      .get('@teamMemberLocation')
      .should('not.contain', 'Göteborg')
      .should('contain', 'Stockholm')

    cy
      .get('[data-test=filter-]')
      .as('all')
      .click()
      .get('@teamMemberLocation')
      .should('contain', 'Stockholm')
      .and('contain', 'Göteborg')

    // Enter press when tabbing
    cy
      .get('@gbg')
      .trigger('keyup', {
        keyCode: 13,
      })
      .get('@teamMemberLocation')
      .should('not.contain', 'Stockholm')
      .should('contain', 'Göteborg')

    cy
      .get('@sthlm')
      .trigger('keyup', {
        keyCode: 13,
      })
      .get('@teamMemberLocation')
      .should('not.contain', 'Göteborg')
      .should('contain', 'Stockholm')

    // Space press when tabbing
    cy
      .get('@gbg')
      .trigger('keyup', {
        keyCode: 32,
      })
      .get('@teamMemberLocation')
      .should('not.contain', 'Stockholm')
      .should('contain', 'Göteborg')

    cy
      .get('@sthlm')
      .trigger('keyup', {
        keyCode: 32,
      })
      .get('@teamMemberLocation')
      .should('not.contain', 'Göteborg')
      .should('contain', 'Stockholm')

    // Does not handle other keys
    cy
      .get('@all')
      .click()
      .get('@gbg')
      .trigger('keyup', {
        keyCode: 9,
      })
      .get('@teamMemberLocation')
      .should('contain', 'Stockholm')
      .and('contain', 'Göteborg')
  })
})
