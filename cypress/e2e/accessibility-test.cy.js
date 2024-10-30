describe('Accessibility Test', () => {

  it('should check accessibility of the homepage', { defaultCommandTimeout: 15000 }, () => {
    cy.visit('https://example.cypress.io/');
    cy.checkAccessibility(null, {
      runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2a', 'wcag22aa', 'best-practice']
    });
  });

  it('should check accessibility of the querying page', { defaultCommandTimeout: 15000 }, () => {
    cy.visit('https://example.cypress.io/commands/querying');
    cy.checkAccessibility(null, {
      runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2a', 'wcag22aa', 'best-practice']
    });
  });

});