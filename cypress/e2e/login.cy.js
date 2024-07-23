describe('Login Test', () => {
  it('should perform login', () => {
    cy.visit('/');

    // Type username and password
    cy.get('.login_wrapper-inner').within(() => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
    });
  
    // Click login button
    cy.get('.login_wrapper-inner').find('#login-button').click();
    
    

  });
});
