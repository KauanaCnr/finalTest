
Cypress.Commands.add('visitar', () => {


    cy.visit(`${Cypress.env('base_url')}`)
    
})
