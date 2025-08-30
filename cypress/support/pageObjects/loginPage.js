class LoginPage {
  constructor() {
    this.usernameInput = '[name="username"]';
    this.passwordInput = '[name="password"]';
    this.submitButton = '[type="submit"]';
    this.loginApiUrl = '**/auth/login';
    this.dashboardApiUrl = '**/dashboard/employees/action-summary';
  }

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com');
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
  }

  interceptLogin() {
    cy.intercept('GET', this.loginApiUrl).as('login');
  }

  interceptDashboard() {
    cy.intercept('GET', this.dashboardApiUrl).as('actionSummary');
  }

  waitAndValidateLogin() {
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  }

  waitAndValidateDashboard() {
    cy.wait('@actionSummary');
  }
}

export default new LoginPage();