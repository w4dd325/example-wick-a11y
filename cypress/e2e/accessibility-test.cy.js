describe('Accessibility Test', () => {

  it('should check accessibility of the homepage', { defaultCommandTimeout: 15000 }, () => {
    cy.visit('https://example.cypress.io/');
    cy.checkAccessibility();
  });

  it('should check accessibility of the querying page', { defaultCommandTimeout: 15000 }, () => {
    cy.visit('https://example.cypress.io/commands/querying');
    cy.checkAccessibility();
  });
  
});