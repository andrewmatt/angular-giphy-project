describe('Giphy GIF Search ', () => {
  it('Should visit the home page', () => {
    cy.visit('/');
    cy.get('#home-container')
      .find('#title')
      .should('have.text', 'Giphy GIF Search');
    cy.get('#home-container')
      .find('#no-results-title')
      .should('have.text', 'Search something to get started!');
  });

  it('Should Search for Test Gifs', () => {
    cy.visit('/');

    cy.get('#search').type('Test');
    cy.get('#search-button').click();
    cy.get('#results-grid').find('.col').should('have.length', 9);
    cy.get('#pagination').should('be.visible');
  });

  it('Should Search for Test Gifs then move to the second page', () => {
    cy.visit('/');

    cy.get('#search').type('Test');
    cy.get('#search-button').click();
    cy.get('#results-grid').find('.col').should('have.length', 9);

    cy.get('#pagination').find('li.page-item').eq(2).click();
    cy.get('#results-grid').find('.col').should('have.length', 9);
  });

  it('Should Search for Test Gifs then move to the last page and then to the first', () => {
    cy.visit('/');

    cy.get('#search').type('Test');
    cy.get('#search-button').click();
    cy.get('#results-grid').find('.col').should('have.length', 9);

    cy.get('#pagination').find('li.page-item').eq(6).click();
    cy.get('#results-grid').find('.col').should('have.length', 5);

    cy.get('#pagination').find('li.page-item').eq(1).click();
    cy.get('#results-grid').find('.col').should('have.length', 9);
  });

  it('Should Search for Test Gifs then move to the next page then to the previous page', () => {
    cy.visit('/');

    cy.get('#search').type('Test');
    cy.get('#search-button').click();
    cy.get('#results-grid').find('.col').should('have.length', 9);

    cy.get('#pagination').find('li.page-item').eq(7).click();
    cy.get('#results-grid').find('.col').should('have.length', 9);

    cy.get('#pagination').find('li.page-item').eq(0).click();
    cy.get('#results-grid').find('.col').should('have.length', 9);
  });

  it('Should Search for Test Gifs then should search for empty string value', () => {
    cy.visit('/');

    cy.get('#search').type('Test');
    cy.get('#search-button').click();
    cy.get('#results-grid').find('.col').should('have.length', 9);

    cy.get('#search').invoke('val', '');
    cy.get('#search-button').click();
    cy.get('#home-container')
      .find('#no-results-title')
      .should('have.text', 'Search something to get started!');
  });
});
