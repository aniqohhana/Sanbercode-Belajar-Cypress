/// <reference types="cypress" />
describe('API Testing', () => {
    it('Test Login', () => {
        const requestBody = {
            "email": "peter@klaven",
        };

        cy.request('POST', 'https://reqres.in/api/login', requestBody)
            .then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body).to.have.property('token');
        });
    });
});