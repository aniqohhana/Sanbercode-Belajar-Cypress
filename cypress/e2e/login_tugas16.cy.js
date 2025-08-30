describe('Test Kasus Login Menggunakan Intercept', () => {
  it('TC_L01 - Login dengan username dan password yang valid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
    cy.get('[type="submit"]').click();
    cy.wait('@actionSummary');
  });

  it('TC_L02 - Login dengan username dan password yang valid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
    cy.get('[type="submit"]').click();
    cy.wait('@actionSummary');
  });

  it('TC_L05 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('Passwordbaru');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L06 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type(' Admin');
    cy.get('[name="password"]').type(' Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L07 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin ');
    cy.get('[name="password"]').type('Admin123 ');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L08 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('aDMIN');
    cy.get('[name="password"]').type('aDMIN123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L09 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin123');
    cy.get('[name="password"]').type('Admin1233');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L10 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('iniusername');
    cy.get('[name="password"]').type('iniP4$$word');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L11 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type(' Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L12 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('Admin123 ');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L13 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('aDMIN123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L14 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('Admin123#');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L15 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('Admin1233');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L16 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('iniP4$$word');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L17 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type(' Admin');
    cy.get('[name="password"]').type('Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L18 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin ');
    cy.get('[name="password"]').type('Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L19 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('aDMIN');
    cy.get('[name="password"]').type('Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L20 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin#$%');
    cy.get('[name="password"]').type('Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L21 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('Admin123');
    cy.get('[name="password"]').type('Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('TC_L22 - Login dengan username dan password yang invalid', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('[name="username"]').type('iniusername');
    cy.get('[name="password"]').type('Admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

 })

 