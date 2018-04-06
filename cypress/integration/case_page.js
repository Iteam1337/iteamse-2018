describe('Start', () => {
  beforeEach(() => {
    cy.viewport(480, 900)
    cy.visit('/case')
  })

  it('should navigate to individual case', () => {
    cy.viewport(1200, 900)
    cy.visit('/case/arbetsformedlingen')

    cy.get('[data-test=header-case]').should('exist')

    // Breadcrumbs
    cy
      .get('[data-test=breadcrumbs]')
      .should('exist')
      .get('[data-test=breadcrumbs] a')
      .should('contain', 'Våra case')
      .and('have.attr', 'href')
      .and('eq', '/case')

    cy
      .get('[data-test=breadcrumbs] span')
      .should('exist')
      .and('contain', 'Arbetsförmedlingen')
  })
})
