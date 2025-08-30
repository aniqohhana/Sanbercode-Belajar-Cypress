import loginPage from "../support/pageObjects/loginPage";

describe('Test Kasus Login Menggunakan POM', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('TC_L01 - Login dengan username dan password yang valid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword('admin123');
        loginPage.clickSubmit();
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('TC_L02 - Login dengan username dan password yang valid', () => {
        loginPage.typeUsername('admin');
        loginPage.typePassword('admin123');
        loginPage.clickSubmit();
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('TC_L05 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('admin');
        loginPage.typePassword('Passwordbaru');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L06 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername(' Admin');
        loginPage.typePassword(' Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L07 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin ');
        loginPage.typePassword('Admin123 ');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L08 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('aDMIN');
        loginPage.typePassword('aDMIN123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L09 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin123');
        loginPage.typePassword('Admin1233');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L10 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('iniusername');
        loginPage.typePassword('iniP4$$word');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L11 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword(' Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L12 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword('Admin123 ');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L13 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword('aDMIN123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L14 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword('Admin123#');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L15 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword('Admin1233');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L16 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin');
        loginPage.typePassword('iniP4$$word');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L17 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername(' Admin');
        loginPage.typePassword('Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L18 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin ');
        loginPage.typePassword('Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L19 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('aDMIN');
        loginPage.typePassword('Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L20 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin#$%');
        loginPage.typePassword('Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L21 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('Admin123');
        loginPage.typePassword('Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });

    it('TC_L22 - Login dengan username dan password yang invalid', () => {
        loginPage.typeUsername('iniusername');
        loginPage.typePassword('Admin123');
        loginPage.clickSubmit();
        cy.get('.oxd-alert-content').should('be.visible');
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });
})