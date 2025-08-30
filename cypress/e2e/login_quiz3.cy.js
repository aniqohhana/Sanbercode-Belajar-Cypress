describe('Test Kasus Login', () => {
  it('TC_L01 - Login dengan username dan password yang valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('TC_L02 - Login dengan username dan password yang valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('TC_L05 - Login dengan username dan password yang invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('Passwordbaru');
    cy.get('button[type="submit"]').click();
 
    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L06 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type(' Admin');
    cy.get('input[name="password"]').type(' Admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L07 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin ');
    cy.get('input[name="password"]').type('Admin123 ');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L08 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('aDMIN');
    cy.get('input[name="password"]').type('aDMIN123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L09 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin123');
    cy.get('input[name="password"]').type('Admin1233');
    cy.get('button[type="submit"]').click();
 
    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L10 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('iniusername');
    cy.get('input[name="password"]').type('iniP4$$word');
    cy.get('button[type="submit"]').click();
 
    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L11 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type(' Admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L12 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('Admin123 ');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L13 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('aDMIN123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L14 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('Admin123#');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L15 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('Admin1233');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L16 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('iniP4$$word');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L17 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type(' Admin');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L18 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin ');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();
 
    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L19 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('aDMIN');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L20 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin#$%');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L21 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('Admin123');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('TC_L22 - Login dengan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com'); 

    cy.get('input[name="username"]').type('iniusername');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();
 
    cy.get('.oxd-alert-content').should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

})  